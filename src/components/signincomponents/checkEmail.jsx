import { projectFirestore } from '../../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const checkEmail = async (email) => {
  const collectionRef = collection(projectFirestore, 'users')
  let isEqual = false
  async function isEmailEqual() {
    const querySnapshot = await getDocs(collectionRef)
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (email === data.email) isEqual = true
    })
  }
  await isEmailEqual()
  return isEqual
}

export default checkEmail
