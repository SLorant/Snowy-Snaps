import { useState, useEffect } from "react";
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";

const useFirestore = (collectionn, sort, emotionArray,  imgType) => {
    const [docs, setDocs] = useState([]);
    //console.log(emotion)
    
    //emotion = 'happy'
    //const q = query(collection(projectFirestore, 'images'), where("emotion", "==", "happy"));
    let q;
    let isGif = false;
    
    //console.log(emotionArray)
    useEffect(() => {
        imgType === "gif" ? isGif=true : isGif=false;

        if ( !emotionArray.length ) {
            q = query(collection(projectFirestore, 'images'), where("gif", "==", isGif), orderBy('createdAt', sort));    
        }
        else if ( !emotionArray.length && imgType=== "") {
            q = query(collection(projectFirestore, 'images'), orderBy('createdAt', sort));    
        }

        else if ( emotionArray.length && imgType=== "") {
            q = query(collection(projectFirestore, 'images'), where("emotion", "in", emotionArray), orderBy('createdAt', sort));    
        }
        /* else if ((emotion === undefined || emotion === '') && ){

        } */
        /* else if (( !emotionArray.length) && imgType==="gif"){
            //console.log(imgType)
            q = query(collection(projectFirestore, 'images'), where("gif", "==", true), orderBy('createdAt', sort))
        }
        else if (( !emotionArray.length) && imgType==="picture"){
            //console.log(imgType)
            q = query(collection(projectFirestore, 'images'), where("gif", "==", false), orderBy('createdAt', sort))
        } */
        else {
            q = query(collection(projectFirestore, 'images'), where("emotion", "in", emotionArray), where("gif", "==", isGif), orderBy('createdAt', sort));
        }
        //setDocs([])
        
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
            //return documents
        }
        GalleryQuery()
        
    }, [collectionn, sort, emotionArray,  imgType])
    //GalleryQuery()
    return {docs};
}

export default useFirestore