import { useState, useEffect } from "react";
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";

const useFirestore = (imageCollection, sort, emotionArray,  imgType) => {
    const [docs, setDocs] = useState([]);
    let q;
    let isGif = false;
    
    useEffect(() => {
        imgType === "gif" ? isGif=true : isGif=false;

        if ( !emotionArray.length && imgType=== "") {
            q = query(collection(projectFirestore, imageCollection), orderBy('createdAt', sort));    
        }
        else if ( !emotionArray.length ) {
            q = query(collection(projectFirestore, imageCollection), where("gif", "==", isGif), orderBy('createdAt', sort));    
        }
        else if ( emotionArray.length && imgType=== "") {
            q = query(collection(projectFirestore, imageCollection), where("emotion", "in", emotionArray), orderBy('createdAt', sort));    
        }
       
        else {
            q = query(collection(projectFirestore, 'images'), where("emotion", "in", emotionArray), where("gif", "==", isGif), orderBy('createdAt', sort));
        }

        async function GalleryQuery() {
            const querySnapshot = await getDocs(q)
            let documents = [];
            querySnapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);

            return () => querySnapshot();
        }
        GalleryQuery()
        
    }, [imageCollection, sort, emotionArray,  imgType])

    return {docs};
}

export default useFirestore