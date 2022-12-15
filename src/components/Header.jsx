import PropTypes from 'prop-types'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { motion } from "framer-motion"
import useComponentVisible from './hooks/useComponentVisible';
import { doc, getDoc } from "firebase/firestore";
import useFirestore from './hooks/useFirestore'
import { projectFirestore, projectStorage } from "../../firebase/config";
import {  ref, getDownloadURL } from "firebase/storage";

const Header = ({title}) => {
  const { pathname } = useLocation();
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const [isActive, setIsActive] = useState(false);
    
  const { reft, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { docs } = useFirestore('users');

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

  const navigate = useNavigate()

  async function handleLogout() {
    setError('')

    try{
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }}

    //const ref = ref(storage, 'images/husky.jpg')

    //const storage = getStorage();
    
    /*async function showProfile(){
      if(useAuth().currentUser){
      setError('')

    try {
     await getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
     
      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    
    }
    catch {
      setError('Failed to log out')
    }*/
    


    if( useAuth().currentUser){
   getDownloadURL(ref(projectStorage, `${currentUser.uid}/profilepics/image`))
  .then((url) => {
     // Or inserted into an <img> element
     const img = document.getElementById('myimg');
     img.setAttribute('src', url);
   })
   .catch((error) => {
    console.log("user has no profile pic")
   });
  } 
  
    
  //onClick={() => setIsActive(!isActive)}
  //  onClick={() => setIsComponentVisible(!isComponentVisible)}
  // ${isActive ? "block" : "hidden"}
  //{!isComponentVisible && ()}
  
  return (
    <header className="fixed top-0 w-full z-50">
        <nav className="flex sticky justify-between items-center h-12 xl:h-[78px] bg-white border-white border-2  shadow-md">
        <a href="#"  className="absolute font-cutefont  font-bold text-lg text-slate-700 sm:text-xl lg:text-2xl xl:text-4xl md:left-4 lg:left-8 xl:left-12">{title}</a>

          <div className="md:ml-[50px] lg:ml-[200px] xl:ml-[350px] 2xl:ml-[550px]">
        <Link to="/"  className={`${pathname === '/' ? 'border-slate-700' : ''} p-[13px] xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 border-white transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl`}>Home</Link>
            <Link to="/learn" className={`${pathname === '/learn' ? 'border-slate-700' : ''} p-[13px] xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700 border-white sm:text-xl  lg:text-xl xl:text-2xl`}>Learn</Link>
            <Link to="/watch" className={`${pathname === '/watch' ? 'border-slate-700' : ''} p-[13px] xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight border-b-2 transition duration-500 border-white hover:bg-white
             hover:border-slate-700 text-lg text-slate-700  sm:text-xl lg:text-xl xl:text-2xl`}>Huskies' Gallery</Link>
            <Link to="/play" className={`${pathname === '/play' ? 'border-slate-700' : ''} p-[13px] xl:p-4 md:px-2 lg:px-4 2xl:px-6 font-hlight  border-b-2 transition duration-500 hover:bg-white
             hover:border-slate-700 text-lg text-slate-700   border-white  sm:text-xl lg:text-xl xl:text-2xl`}>Let's play</Link>
            </div>
            
           {useAuth().currentUser  ?
           <div className="flex">
           <div className="mr-24 ">
           <p
          className={`${pathname === '/profile' ? 'border-slate-700' : ''} border-white border-b-2  p-[11px] xl:p-4
              font-hbold tracking-wide mr-2   float-right transition duration-500 cursor-default
              text-lg text-slate-800 sm:text-xl lg:text-xl xl:text-xl`}
          >{ username}</p>
          </div>
          <div  className="group relative w-8 h-4  float-right right-20 top-2 lg:top-2 xl:top-4">
          
          <motion.img  className="w-8 h-8 rounded-full cursor-pointer " src='src\assets\downarrow.png' alt="userpic"
          onClick={() => { setIsComponentVisible(!isComponentVisible); setIsActive(!isActive);}}
        animate={{ rotate: isActive && isComponentVisible ? 180 : 0}} />
            

          <div  ref={reft} className={`block flex flex-col justify-center items-center mt-2 w-40 -ml-16
           rounded-md   bg-[rgba(255,255,255,0)]  z-0`}>

          {isComponentVisible && isActive && (<div>
          <Link   to="/profile"  className="block p-2 xl:p-2 
          border-white font-hlight  transition w-32 mt-2 duration-500 hover:bg-white
         border-slate-700  border-dashed rounded-md text-md text-white w-full text-center sm:text-xl lg:text-xl xl:text-md
         bg-slate-700 shadow-[0px_3px_1px_2px_rgba(0,0,0,0.4)] hover:text-white">Profile</Link>

         <Link to="/my-gallery"  className="block p-2 xl:p-2 
          border-white font-hlight transition w-32 duration-500 hover:bg-white
         border-slate-700  border-dashed rounded-md text-md text-white w-full text-center sm:text-xl lg:text-xl xl:text-md
         bg-slate-700 shadow-[0px_3px_1px_2px_rgba(0,0,0,0.4)] hover:text-slate-800  my-2">My gallery</Link>

          <Link to="/login" onClick={handleLogout} className="block p-2 xl:p-2
          border-white font-hlight  transition  duration-500 hover:bg-white
         border-slate-700 mb-3 border-dashed rounded-md text-md text-white w-full text-center sm:text-xl lg:text-xl xl:text-md
         bg-slate-700 shadow-[0px_3px_1px_2px_rgba(0,0,0,0.4)] hover:text-white">Log out</Link></div>)}

          

          </div>
          </div>
          <img id="myimg" className="w-10 h-10 xl:w-12 xl:h-12 rounded-full absolute right-4 top-[2px] xl:top-1 shadow-md" src="src\assets\profile.png" alt="userpic" />
          </div>
          :
          <Link to='/login'
          className={`${pathname === '/signup' || pathname === '/login' ? 'border-slate-700' : ''} mr-20 z-40 p-2 xl:p-4
             border-white font-hlight border-b-2 transition duration-500 hover:bg-white
          hover:border-slate-700 text-lg text-slate-700 sm:text-xl lg:text-xl xl:text-2xl`}
          >Sign In</Link>}
            
            
        </nav>
        
    </header>
  )
}
//useAuth().currentUser && useAuth().currentUser.email ? currentUser.email : 'Sign In'
//{useAuth().currentUser && useAuth().currentUser.email ? "/profile" : "/login"}
//currentUser.email !== null
Header.defaultProps = {
    title: 'Header',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header

/*const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
  };
 
  let toggleClass = isActive ? 'border-slate-700' : ''; */

  /*{isComponentVisible ? 
          (<motion.img  className="w-8 h-8 rounded-full cursor-pointer " src='src\assets\downarrow.png' alt="userpic"
          onClick={() => setIsActive(!isActive)}
        animate={{ rotate: isActive ? 180 : 0}} />)
          :  */