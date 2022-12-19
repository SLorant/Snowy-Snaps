import { useState, useEffect } from "react";
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";

const useFirestore = (collectionn, sort, emotion, paramlimit) => {
    const [docs, setDocs] = useState([]);
    console.log(emotion)
    //emotion = 'happy'
    //const q = query(collection(projectFirestore, 'images'), where("emotion", "==", "happy"));
    let q;
    if (emotion === undefined || emotion === '') {
        if( paramlimit === undefined || paramlimit === 50) {
        q = query(collection(projectFirestore, 'images'), orderBy('createdAt', sort), limit(50));
        }
        else {
             q = query(collection(projectFirestore, 'images'), orderBy('createdAt', sort), limit(paramlimit));
             }   
        
    }
    else {
        q = query(collection(projectFirestore, 'images'), where("emotion", "==", emotion), orderBy('createdAt', sort), limit(paramlimit));
    }
    
    //console.log(q)
    useEffect(() => {
        setDocs([])
        
        //const unsub = query(projectFirestore.collection(projectFirestore, collectionn)
        async function GalleryQuery() {
        //const unsub = query(collection(projectFirestore, collectionn), where("emotion", "==", "happy"))

        const querySnapshot = await getDocs(q)
      
                let documents = [];
                querySnapshot.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
         
        
            /* .orderBy('createdAt', sort)
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            }); */

            return () => querySnapshot();
        }
        GalleryQuery()
    }, [collectionn, sort, emotion, paramlimit])
    
    return {docs};
}

export default useFirestore