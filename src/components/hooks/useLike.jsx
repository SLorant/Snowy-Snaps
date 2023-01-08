
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, getDoc, orderBy, limit, QuerySnapshot, doc, updateDoc   } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from "react";

const useLike = (created, setLikes) => {

    const {currentUser} = useAuth()
    const collectionRef = collection(projectFirestore, 'images');
    const docRef =  doc(projectFirestore, 'users', currentUser.uid)

    useEffect(() => {
    
        async function Like() {
            const q = query(collectionRef, where("createdAt", "==", created), );
        // get the user document snapshot 
        const docSnap = await getDoc(docRef)
        const docdata = docSnap.data();
        const username = docdata.username;
        // get the existing value of the likedpics field
        const likedpics = docSnap.get('likedpics') || []; // use an empty array if the field is not set

        const querySnapshot = await getDocs(q)
        const likedImage = querySnapshot.docs[0];
        const likedby = likedImage.get("likedby") || [];

        let documents = [];
        querySnapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})   
            })


        const likedpicsSet = new Set(likedpics.map(pic => pic.id));
        const likedbySet = new Set(likedby.map(pic => pic.username));

        likedpicsSet.add(documents[0].id);
        likedbySet.add(username);

        const data = { likedpics: [...likedpicsSet].map(id => ({ id })) };
        const likedbydata = { likedby: [...likedbySet].map(username => ({ username })) };

        const imgRef = doc(projectFirestore, 'images', documents[0].id);

        await updateDoc(imgRef, likedbydata);

            
        const likequery = query(collectionRef, where("createdAt", "==", created), );
        const querySnapshotforlikes = await getDocs(likequery)
        const likedImageforlikes = querySnapshotforlikes.docs[0];
        const likedbyforlikes = likedImageforlikes.get("likedby") || [];
        const likes = likedbyforlikes.length
        const imgdata = { likes: likes };

        setLikes(likes)
        await updateDoc(imgRef, imgdata);
        

        await updateDoc(docRef, data);
        
        }
    Like()

    }, [created])
    
}

export default useLike
    