import { projectFirestore } from '../../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const checkUsername = async (username) => {
  const collectionRef = collection(projectFirestore, 'users')
  let isEqual = false
  async function isNameEqual() {
    const querySnapshot = await getDocs(collectionRef)
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (username === data.username) isEqual = true
    })
  }
  await isNameEqual()
  return isEqual
}

export default checkUsername
