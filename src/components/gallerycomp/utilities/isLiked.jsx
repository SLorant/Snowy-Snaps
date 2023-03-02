import { projectFirestore } from '../../../../firebase/config'
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore'

const IsLiked = (created, userid, setLikedByUser, setLikes) => {
  // Get reference to the image collection and user document in the Firebase Firestore database
  const collectionRef = collection(projectFirestore, 'images')
  const docRef = doc(projectFirestore, 'users', userid)

  async function Liked() {
    // Query the images collection to find the liked image
    const q = query(collectionRef, where('createdAt', '==', created))
    const querySnapshot = await getDocs(q)
    const likedImage = querySnapshot.docs[0]
    // Get the data for the currently logged in user
    const docSnap = await getDoc(docRef)
    const docdata = docSnap.data()
    const username = docdata.username
    // Get the list of users who liked the image, and count them
    const likedby = likedImage.get('likedby') || []
    const likes = likedby.length
    setLikes(likes)
    // Go through the users who liked the image, check if the current user has liked it
    for (let i = 0; i < likedby.length; i++) {
      if (likedby[i].username === username) {
        setLikedByUser(true)
      }
    }
  }
  Liked()
}

export default IsLiked
