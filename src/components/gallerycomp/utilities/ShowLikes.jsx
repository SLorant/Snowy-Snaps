import { projectFirestore } from '../../../../firebase/config'
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore'

const ShowLikes = (created, setLikes) => {
  // Get reference to the image collection and user document in the Firebase Firestore database
  const collectionRef = collection(projectFirestore, 'images')

  async function getLikes() {
    // Query the images collection to find the liked image
    const q = query(collectionRef, where('createdAt', '==', created))
    const querySnapshot = await getDocs(q)
    const likedImage = querySnapshot.docs[0]
    // Get the list of users who liked the image, and count them
    const likedby = likedImage.get('likedby') || []
    const likes = likedby.length
    setLikes(likes)
  }
  getLikes()
}

export default ShowLikes
