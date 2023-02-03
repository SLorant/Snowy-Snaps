import { projectFirestore } from '../../../firebase/config'
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  orderBy,
  limit,
  QuerySnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore'

const IsLiked = (created, userid, setIsLiked, setLikes) => {
  const collectionRef = collection(projectFirestore, 'images')
  const docRef = doc(projectFirestore, 'users', userid)

  async function Liked() {
    const q = query(collectionRef, where('createdAt', '==', created))
    const docSnap = await getDoc(docRef)
    const docdata = docSnap.data()
    const username = docdata.username
    //console.log(userniame)
    const querySnapshot = await getDocs(q)
    const likedImage = querySnapshot.docs[0]

    const likedby = likedImage.get('likedby') || []
    const likes = likedby.length
    setLikes(likes)
    //console.log(likedby)
    for (let i = 0; i < likedby.length; i++) {
      if (likedby[i].username === username) {
        setIsLiked(true)
        //console.log(likedby[i])
      }
    }
  }
  Liked()
}

export default IsLiked
