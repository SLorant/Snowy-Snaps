import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

const useShowLiked = () => {
    const [docs, setDocs] = useState([]);
    const {currentUser } = useAuth()
    const docRef = doc(projectFirestore, "users", currentUser.uid);
    let likedpics = []
    let documents= ""


    useEffect(() => {
        async function LikedQuery() {
    
            const docSnap = await getDoc(docRef);
            likedpics = docSnap.get('likedpics')
            if (likedpics) {
                const likedIds = new Set(likedpics.map(pic => pic.id));
                console.log(likedIds)
                const collectionRef = collection(projectFirestore, 'images');
                //const querySnapshot = await getDocs(query(collectionRef, where("id", "in", [...likedIds])));
                const q = query(collectionRef, where("id", "in", [...likedIds]));  
                console.log(q)
                const querySnapshot = await getDocs(q) 
               
                documents = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));

                /* querySnapshot.forEach(doc => {
                    if(!documents.find(d => d.id === doc.id)) {
                        documents.push({...doc.data(), id: doc.id})
                    }
                }); */

                console.log(documents)
                setDocs(documents);
            } else {
                setDocs([]);
            }
    
            //setDocs(likedpics);
    //console.log(documents)
           
    }
        LikedQuery()

        },  [] )
    return {docs};

    }

export default useShowLiked