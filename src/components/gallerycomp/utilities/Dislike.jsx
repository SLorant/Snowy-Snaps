import { projectFirestore } from '../../../../firebase/config'
import { collection, query, where, getDocs, getDoc, setDoc, updateDoc, doc } from 'firebase/firestore'

const Dislike = (created, setLikedByUser, userid) => {
  // Get reference to the image collection and user document in the Firebase Firestore database
  const collectionRef = collection(projectFirestore, 'images')
  const docRef = doc(projectFirestore, 'users', userid)

  async function DislikeThis() {
    // Query the images collection to find the image that is to be disliked
    const q = query(collectionRef, where('createdAt', '==', created))
    const querySnapshot = await getDocs(q)
    const likedImage = querySnapshot.docs[0]
    // Get the data for the currently logged in user
    const docSnap = await getDoc(docRef)
    const docdata = docSnap.data()
    const username = docdata.username
    // Get the list of users who liked the image, and also the chosen user's liked images
    const likedby = likedImage.get('likedby') || []
    const likedpics = docSnap.get('likedpics') || []
    // Go through the users who liked the image
    for (let i = 0; i < likedby.length; i++) {
      if (likedby[i].username === username) {
        //Image is no longer liked
        setLikedByUser(false)
        let deleteImgData
        // Remove the image from the list of liked images for the user
        for (let j = 0; j < likedpics.length; j++) {
          if (likedpics[j].id === likedImage.id) {
            const deleteFromUser = likedpics.filter((item) => item !== likedpics[j])
            const likedpicsSet = new Set(deleteFromUser.map((pic) => pic.id))
            deleteImgData = { likedpics: [...likedpicsSet].map((id) => ({ id })) }
          }
        }
        // Remove the user from the list of users who liked the image
        const newArray = likedby.filter((item) => item !== likedby[i])
        const likedbySet = new Set(newArray.map((pic) => pic.username))
        const likedbydata = { likedby: [...likedbySet].map((username) => ({ username })) }
        // Update the document in the Firebase Firestore database for the image and user
        try {
          await updateDoc(doc(projectFirestore, 'images', likedImage.id), likedbydata)
          await updateDoc(docRef, deleteImgData)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  DislikeThis()
}

export default Dislike
