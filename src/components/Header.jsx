import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { doc, getDoc } from "firebase/firestore";
import { projectFirestore, projectStorage } from "../../firebase/config";
import {  ref, getDownloadURL } from "firebase/storage";
import HeaderLink from './headercomp/HeaderLink';

const Header = () => {
  const { currentUser } = useAuth()
  

  const [ username, setUserName ] = useState("")

  if(useAuth().currentUser){
    const docRef = doc(projectFirestore, "users", currentUser.uid);
    const docSnap = getDoc(docRef).then(docSnap => {
    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        setUserName(data.username);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
}
})
  }
  
  /*async function loadUserData() {
  if(useAuth().currentUser){
    try {
      const docRef = doc(projectFirestore, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserName(data.username);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting user data:", error);
    }
  }
}

loadUserData();
 */
  
  async function loadProfilePic() {
    if(useAuth().currentUser){
      try {
        const url = await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`));
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
      } catch (error) {
        console.log("user has no profile pic")
      }
    }
  }
  loadProfilePic();
  

  return (
    <header className="fixed flex top-0 w-full z-40 ">
        <nav className="flex sticky w-full justify-between items-center h-12 xl:h-[72px] bg-sand   ">  
        <a href="#"  className="absolute font-headersc  font-bold text-lg text-darkblue sm:text-xl lg:text-2xl xl:text-4xl md:left-4 lg:left-8 xl:left-8">Husky</a>

          <div className="ml-52 flex justify-center items-center w-2/3">
           <HeaderLink title="Home" location="/" />
           <HeaderLink title="Learn" location="/learn" />
           <HeaderLink title="Huskies' Gallery" location="/watch" />
            </div>

           {useAuth().currentUser  ?
           <div className="flex">
           <div className="mr-20 ">
         
          <HeaderLink title={username} location="/profile"/>
          </div>
          
          <img id="myimg" className="w-10 h-10 xl:w-12 xl:h-12 rounded-full absolute right-5 xl:top-1 shadow-md" src="src\assets\profile.png" alt="userpic" />
          </div>
          :
          <div className='mr-8 flex items-center'>
          <HeaderLink title="Sign In" location="/login" />
          </div>}         
          </nav>
    </header>
  )
}

export default Header

