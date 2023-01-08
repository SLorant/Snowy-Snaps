import { projectFirestore } from "../../../firebase/config";
import { collection, query, where, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from "react";

const useLike = (created) => {
  const { currentUser } = useAuth();
  const imagesCollection = collection(projectFirestore, "images");
  const usersCollection = collection(projectFirestore, "users");
  const currentUserDoc = doc(usersCollection, currentUser.uid);
  let documents = [];

  const updateLikedPics = async () => {
    // get the existing value of the likedpics field
    const docSnap = await getDoc(currentUserDoc);
    const likedpics = docSnap.get("likedpics") || [];

    // add the new liked image to the likedpics array
    const likedpicsSet = new Set(likedpics.map(pic => pic.id));
    likedpicsSet.add(documents[0].id);
    const data = { likedpics: [...likedpicsSet].map(id => ({ id })) };

    // update the likedpics field in the users collection
    await updateDoc(currentUserDoc, data);
  };

  const updateLikedBy = async () => {
    // get the existing value of the likedby field
    const imgRef = doc(imagesCollection, documents[0].id);
    const imgSnap = await getDoc(imgRef);
    const likedby = imgSnap.get("likedby") || [];

    // add the current user to the likedby array
    const likedbySet = new Set(likedby.map(user => user.username));
    likedbySet.add(username);
    const likedbydata = { likedby: [...likedbySet].map(username => ({ username })) };

    // update the the likedby field in the images collection
    await updateDoc(imgRef, likedbydata);
};

  const updateLikes = async () => {
    // get the likedby array for the current image
    const imgSnap = await getDoc(imgRef);
    const likedby = imgSnap.get("likedby") || [];

    // update the likes field in the images collection
    const likes = likedby.length;
    const imgdata = { likes: likes };
    await updateDoc(imgRef, imgdata);
    };

  useEffect(() => {
    async function Like() {
        const q = query(imagesCollection, where("createdAt", "==", created));
        // get the user document snapshot
        const docSnap = await getDoc(currentUserDoc);
        const docdata = docSnap.data();
        const username = docdata.username;

        const querySnapshot = await getDocs(q);
        const likedImage = querySnapshot.docs[0];
        let documents = [];
        querySnapshot.forEach(doc => {
            documents.push({ ...doc.data(), id: doc.id });
        });

        // update the likedpics and likedby fields in the users and images collections
        await updateLikedPics();
        await updateLikedBy();

        // update the likes field in the images collection
        await updateLikes();
        }

        Like();

    }, [created]);
};

export default useLike;