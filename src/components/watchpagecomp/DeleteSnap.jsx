import { projectFirestore, projectStorage } from '../../../firebase/config'
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'

const DeleteSnap = (created) => {
  const collectionRef = collection(projectFirestore, 'images')
  async function Delete() {
    const q = query(collectionRef, where('createdAt', '==', created))
    const querySnapshot = await getDocs(q)
    const likedImage = querySnapshot.docs[0]
    const firestoreID = likedImage.get('id')
    const url = likedImage.get('url')
    const imageRef = ref(projectStorage, url)
    await deleteObject(imageRef)
    await deleteDoc(doc(projectFirestore, 'images', `${firestoreID}`))
  }
  Delete()
}

export default DeleteSnap
