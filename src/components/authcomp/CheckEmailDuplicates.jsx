import { projectFirestore } from '../../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const CheckEmailDuplicates = async (email) => {
  const collectionRef = collection(projectFirestore, 'users')
  let isDuplicate = false
  async function doesEmailExist() {
    const querySnapshot = await getDocs(collectionRef)
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (email === data.email) isDuplicate = true
    })
  }
  await doesEmailExist()
  return isDuplicate
}

export default CheckEmailDuplicates
