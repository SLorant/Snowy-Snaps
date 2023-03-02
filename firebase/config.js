import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const apiKey = import.meta.env.VITE_API_KEY
const authDomain = import.meta.env.VITE_AUTH_DOMAIN
const projectId = import.meta.env.VITE_PROJECT_ID
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_APP_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const auth = firebase.auth()

export const createUserDocument = async (user, additionalData) => {
  if (!user) return

  const userRef = projectFirestore.doc(`users/${user.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { email } = user
    const { username } = additionalData

    try {
      await userRef.set({
        email,
        username,
        createdAt: new Date(),
      })
    } catch (error) {
      console.log('Error in creating user', error)
    }
  }
}

export { projectStorage, projectFirestore, timestamp, auth }
