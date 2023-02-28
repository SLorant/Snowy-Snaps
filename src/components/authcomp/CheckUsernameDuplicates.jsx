import { projectFirestore } from '../../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const CheckUsernameDuplicates = async (username) => {
  const collectionRef = collection(projectFirestore, 'users')
  let isDuplicate = false
  async function doesNameExist() {
    const querySnapshot = await getDocs(collectionRef)
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      if (username === data.username) isDuplicate = true
    })
  }
  await doesNameExist()
  return isDuplicate
}

export default CheckUsernameDuplicates
