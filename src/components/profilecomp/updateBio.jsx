import React from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { projectFirestore } from '../../../firebase/config'

const updateBio = (userid, bio) => {
  const docRef = doc(projectFirestore, 'users', userid)

  async function Update() {
    /* const docSnap = await getDoc(docRef)
    const docdata = docSnap.data(); */
    console.log(bio)
    console.log(docRef)
    const data = { bio: bio }
    await updateDoc(docRef, data)
  }
  Update()
}

export default updateBio
