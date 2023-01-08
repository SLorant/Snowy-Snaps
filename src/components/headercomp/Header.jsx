import { useState, useEffect} from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { doc, getDoc } from "firebase/firestore";
import { projectFirestore, projectStorage } from "../../../firebase/config";
import {  ref, getDownloadURL } from "firebase/storage";
import HeaderLink from './HeaderLink';

const Header = () => {
  const { currentUser } = useAuth()
  const [ username, setUserName ] = useState("")

 
    

  useEffect(()=>{
    if(currentUser){
    async function loadProfilePic() {
    
      try {
        const docRef = doc(projectFirestore, "users", currentUser.uid);
        const docSnap = await getDoc(docRef)
         if (docSnap.exists()) {
        const data = docSnap.data();
        setUserName(data.username);
        } else console.log("No such document!");
         
        const url = await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`));
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
      } catch (error) {
       /*  console.log("user has no profile pic:", error)
        console.log("Error getting user data:", error); */
      }
    }
    loadProfilePic();
  }

  }, [currentUser])
   
  

  
  

  return (
    <header className="fixed flex top-0 w-full z-40 ">
        <nav className="flex sticky w-full justify-between items-center h-12 xl:h-[72px] bg-sand  ">  
        <a href="#"  className="absolute font-headersc font-bold text-lg text-blue  lg:text-2xl xl:text-4xl
         left-2 lg:left-8 top-3 w-52 xl:left-8 mb-1">
          <img src="src/assets/logo.png" alt="logo" />
         </a>

          <div className="ml-28 lg:ml-60 flex justify-center items-center w-2/3 h-full">
           <HeaderLink title="Home" location="/" />
           <HeaderLink title="Learn" location="/learn" />
           <HeaderLink title="Huskies' Gallery" location="/watch" />
            </div>

           {useAuth().currentUser  ?
           <div className="flex items-start justify-center  h-full">
           <div className="mr-16 xl:mr-20 w-full h-full">
          <HeaderLink title={username} location="/profile"/>
          </div>
          <img id="myimg" className="w-11 h-11 xl:w-12 xl:h-12 rounded-full absolute right-2 lg:right-3 xl:right-5 top-[2px] xl:top-1 shadow-md"
           src="src\assets\profile.png" alt="userpic" />
          </div>
          :
          <div className='xl:mr-12 mr-2 absolute  h-full right-2 items-center'>
          <HeaderLink title="Sign In" location="/login" />
          </div>}         
          </nav>
    </header>
  )
}

export default Header

