
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, getDoc, orderBy, limit, QuerySnapshot, doc, updateDoc   } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from "react";

const useLike = (created) => {
  
        console.log("asd")
        const {currentUser} = useAuth()
        const collectionRef = collection(projectFirestore, 'images');
        const docRef =  doc(projectFirestore, 'users', currentUser.uid)

    useEffect(() => {
    
    async function Like() {
        
       
        
        const q = query(collectionRef, where("createdAt", "==", created), );
        console.log(q)
        let likedImageData;
        // get the user document snapshot
    //const docSnapshot = await docRef.get;
     const docSnap = await getDoc(docRef)
     const docdata = docSnap.data();
     const username = docdata.username;
        
    // get the existing value of the likedpics field
    const likedpics = docSnap.get('likedpics') || []; // use an empty array if the field is not set
    //const likedpics = []; // use an empty array if the field is not set
    
        const querySnapshot = await getDocs(q)
        const likedImage = querySnapshot.docs[0];
        let documents = [];
        querySnapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})   
            })

        
        console.log(likedImage)

        const likedpicsSet = new Set(likedpics.map(pic => pic.id));
        likedpicsSet.add(documents[0].id);
        const data = { likedpics: [...likedpicsSet].map(id => ({ id })) };

        // check if the user has already liked the image
        const likedImageIndex = likedpics.findIndex(pic => pic.id === documents[0].id);
        console.log(likedImageIndex)
        
        if (likedImageIndex !== -1) {
            likedImageData = likedpics[likedImageIndex];
        } else {
            likedImageData = { id: documents[0].id, liked: false };
            likedpics.push(likedImageData);
        }

        if (!likedImageData.liked) {
            const imgRef = doc(projectFirestore, 'images', documents[0].id);
            const imgSnap = await getDoc(imgRef);
            const likes = imgSnap.get('likes') || 0;
            const imgdata = { likes: likes + 1 };
            const userdata = { likedby: username}
            likedImageData.liked = true;
            await updateDoc(imgRef, imgdata);
            await updateDoc(imgRef, userdata);
        }

      

        await updateDoc(docRef, data);
        
        }
    Like()

    }, [created])
    

    

    
    //return {Like};
}

export default useLike
    