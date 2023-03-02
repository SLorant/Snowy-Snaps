import { projectFirestore, projectStorage } from '../../../../firebase/config'
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'

const DeleteSnap = (created) => {
  // get a reference to the 'images' collection in Firestore
  const collectionRef = collection(projectFirestore, 'images')
  async function Delete() {
    // create a query to find the selected image in the db, and then return the first element from the query
    const q = query(collectionRef, where('createdAt', '==', created))
    const querySnapshot = await getDocs(q)
    const likedImage = querySnapshot.docs[0]
    // get the Firestore ID and download URL of the image
    const firestoreID = likedImage.get('id')
    const url = likedImage.get('url')
    // get a reference to the image file in Firebase Storage
    const imageRef = ref(projectStorage, url)
    // delete the image file from Firebase Storage, and also from Firestore using its ID
    await deleteObject(imageRef)
    await deleteDoc(doc(projectFirestore, 'images', `${firestoreID}`))
  }
  Delete()
}

export default DeleteSnap
