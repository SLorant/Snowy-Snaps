
import { projectFirestore } from "../../../firebase/config";
import {  collection, query, where, getDocs, getDoc, orderBy, limit, QuerySnapshot, doc, updateDoc   } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';

const useLike = (created) => {
    const {currentUser} = useAuth()
    const collectionRef = collection(projectFirestore, 'images');
    const docRef =  doc(projectFirestore, 'users', currentUser.uid)
    //const likedpics = docSnapshot.get('likedpics') || []
    console.log(created)
    const q = query(collectionRef, where("createdAt", "==", created), );
    console.log(q)
     /* useEffect(() => {
        })  */
    async function Like() {
        // get the user document snapshot
    //const docSnapshot = await docRef.get;
    console.log("asd")
    // get the existing value of the likedpics field
    //const likedpics = doc(projectFirestore, 'users', currentUser.uid).get('likedpics') || []; // use an empty array if the field is not set
    const likedpics = []; // use an empty array if the field is not set
    
        const querySnapshot = await getDocs(q)
        const likedImage = querySnapshot.docs[0];
        const data = { likedpics: [...likedpics, likedImage] };
        console.log(likedImage)
        await updateDoc(docRef, data);
        
        }
    Like()

    return ;
}

export default useLike
    