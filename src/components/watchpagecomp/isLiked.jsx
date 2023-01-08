
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, getDoc, orderBy, limit, QuerySnapshot, doc, updateDoc   } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from "react";

const useIsLiked = (created, setIsLiked) => {
    const {currentUser} = useAuth()
    const collectionRef = collection(projectFirestore, 'images');
    const docRef =  doc(projectFirestore, 'users', currentUser.uid)

    async function Liked() {
        const q = query(collectionRef, where("createdAt", "==", created), );
        const docSnap = await getDoc(docRef)
        const docdata = docSnap.data();
        const username = docdata.username;
        //console.log(username)
        const querySnapshot = await getDocs(q)
        const likedImage = querySnapshot.docs[0];
        const likedby = likedImage.get("likedby") || [];
        //console.log(likedby)
        for (let i=0; i<likedby.length; i++){
            if(likedby[i].username === username) setIsLiked(true)
        }
        
        
    }
    Liked()

}

export default useIsLiked