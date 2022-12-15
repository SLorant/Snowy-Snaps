import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../../../firebase/config';
import { useAuth } from "../../contexts/AuthContext"
import {
    getFirestore, collection, onSnapshot, getDoc,
    addDoc, deleteDoc, doc, updateDoc
  } from 'firebase/firestore'
  import uuid from "react-uuid";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { currentUser } = useAuth()
    const filename = file.name

    useEffect(() => {
        //references
        //const storageRef = projectStorage.ref(`${currentUser.uid}/profilepics/image`);
        const storageRef = projectStorage.ref(`${currentUser.uid}/uploadedpics/${uuid()}`);
        
        const collectionRef = projectFirestore.collection('images');
        const db = getFirestore()
        // Create a storage reference
        //const reviewRef = projectStorage.ref(`profilepics/${file.name}`);

        // Upload the object to that ref
        //reviewRef.put(file);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
            setUrl(url);
            /*let docRef = doc(db, 'images', url)
            
            await updateDoc(docRef, {
                profilePic: url
                
            });*/
            
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage;