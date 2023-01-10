import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, getDoc,setDoc, updateDoc, doc   } from "firebase/firestore";

const Dislike = (created, setIsLiked, userid) => {
    const collectionRef = collection(projectFirestore, 'images');
    const docRef =  doc(projectFirestore, 'users', userid)

    async function DislikeThis() {
        const q = query(collectionRef, where("createdAt", "==", created), );
        const docSnap = await getDoc(docRef)
        const docdata = docSnap.data();
        const username = docdata.username;
 
        const querySnapshot = await getDocs(q)
        const likedImage = querySnapshot.docs[0];
        const likedby = likedImage.get("likedby") || [];
        let documents = [];
        querySnapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})   
            })
        const likedpics = docSnap.get('likedpics') || []
        const imgRef = doc(projectFirestore, 'images', documents[0].id);
        for (let i=0; i<likedby.length; i++){
            if(likedby[i].username === username) {
                setIsLiked(false)
                let deleteImgData;

                for (let j=0; j<likedpics.length; j++){
                    if(likedpics[j].id === likedImage.id) {
                        const deleteFromUser = likedpics.filter(item => item !== likedpics[j])
                        const likedpicsSet = new Set(deleteFromUser.map(pic => pic.id));
                        deleteImgData = { likedpics: [...likedpicsSet].map(id => ({ id })) };
                    }
                }
                const newArray = likedby.filter(item => item !== likedby[i])
                const likedbySet = new Set(newArray.map(pic => pic.username));
                const likedbydata = { likedby: [...likedbySet].map(username => ({ username })) };

                try {
                    await updateDoc( imgRef, likedbydata);
                    await updateDoc( docRef, deleteImgData);
                  } catch (error) {
                    console.error(error);
                  }
            }
        }
    }
    DislikeThis()
}

export default Dislike