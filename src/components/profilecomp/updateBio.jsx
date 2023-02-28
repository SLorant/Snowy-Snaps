import { updateDoc, doc } from 'firebase/firestore'
import { projectFirestore } from '../../../firebase/config'

const UpdateBio = (userid, bio) => {
  const docRef = doc(projectFirestore, 'users', userid)

  async function Update() {
    const data = { bio: bio }
    await updateDoc(docRef, data)
  }
  Update()
}

export default UpdateBio
