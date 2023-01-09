
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, getDoc,setDoc, updateDoc, doc   } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from "react";

const Dislike = (created, setIsLiked, userid) => {
    const collectionRef = collection(projectFirestore, 'images');
    const docRef =  doc(projectFirestore, 'users', userid)

    async function DislikeThis() {
        const q = query(collectionRef, where("createdAt", "==", created), );
        const docSnap = await getDoc(docRef)
        const docdata = docSnap.data();
        const username = docdata.username;
        //console.log(username)
        const querySnapshot = await getDocs(q)
        const likedImage = querySnapshot.docs[0];
        console.log(likedImage)
        const likedby = likedImage.get("likedby") || [];
        let documents = [];
        querySnapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})   
            })

        const imgRef = doc(projectFirestore, 'images', documents[0].id);
        //console.log(likedby)
        for (let i=0; i<likedby.length; i++){
            if(likedby[i].username === username) {
                const newArray = likedby.filter(item => item !== likedby[i])
                setIsLiked(false)

                const likedbySet = new Set(newArray.map(pic => pic.username));
                const likedbydata = { likedby: [...likedbySet].map(username => ({ username })) };

                try {
                    console.log(likedbydata)
                    console.log(likedby)
                    await updateDoc( imgRef, likedbydata);
                    //await setDoc(likedImage, { likedby: newArray.map(item => item.username) });
                  } catch (error) {
                    console.error(error);
                  }
            }
        }
        
        
    }
    DislikeThis()

}

export default Dislike