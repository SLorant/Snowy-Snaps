import { projectFirestore } from '../../../../firebase/config'
import { collection, query, where, getDocs, getDoc, doc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../../../contexts/AuthContext'
import { useEffect } from 'react'

const Like = (created, setLikes) => {
  const { currentUser } = useAuth()
  const collectionRef = collection(projectFirestore, 'images')
  const docRef = doc(projectFirestore, 'users', currentUser.uid)

  useEffect(() => {
    async function Like() {
      // Query the images collection to find the image that is to be liked
      const q = query(collectionRef, where('createdAt', '==', created))
      const querySnapshot = await getDocs(q)
      const likedImage = querySnapshot.docs[0]
      // get the user document snapshot
      const docSnap = await getDoc(docRef)
      const docdata = docSnap.data()
      const username = docdata.username
      // Get the list of users who liked the image, and also the chosen user's liked images
      const likedpics = docSnap.get('likedpics') || [] // use an empty array if the field is not set
      const likedby = likedImage.get('likedby') || []
      // Use Set to make sure there are no duplicate entries
      const likedpicsSet = new Set(likedpics.map((pic) => pic.id))
      const likedbySet = new Set(likedby.map((pic) => pic.username))
      // Add the current image and username to their respective Sets
      likedpicsSet.add(likedImage.id)
      likedbySet.add(username)
      // Convert the Sets back to arrays
      const data = { likedpics: [...likedpicsSet].map((id) => ({ id })) }
      const likedbydata = { likedby: [...likedbySet].map((username) => ({ username })) }

      // Update the 'likedby' field in the image's document
      await updateDoc(doc(projectFirestore, 'images', likedImage.id), likedbydata)

      // Get the updated value of the 'likedby' field and count the number of likes
      const likequery = query(collectionRef, where('createdAt', '==', created))
      const querySnapshotUpdated = await getDocs(likequery)
      const newLikedImages = querySnapshotUpdated.docs[0]
      const newLikedBy = newLikedImages.get('likedby') || []
      const likes = newLikedBy.length
      const imgdata = { likes: likes }
      // Set the new number of likes and update the 'likes' field in the image's document
      setLikes(likes)
      await updateDoc(doc(projectFirestore, 'images', likedImage.id), imgdata)
      // Update the 'likedpics' field in the user's document
      await updateDoc(docRef, data)
    }
    Like()
  }, [created])
}

export default Like
