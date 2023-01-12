import {  projectStorage } from "../../../firebase/config";
import { useAuth } from '../../contexts/AuthContext'
import { motion } from "framer-motion"

const ShowcaseImg = () => {
  const { currentUser, logout } = useAuth()
  const myImages = [
    {id: "myimg1"}, {id: "myimg2"}, {id: "myimg3"}, {id: "myimg4"}, {id: "myimg5"}
    ]
    var storageRef;

 if (currentUser) {
  storageRef = projectStorage.ref(currentUser.uid + "/uploadedpics")
  storageRef.listAll().then(function(result) {
    let i=1;
    let img = "";
    result.items.forEach(function(imageRef) {
      
      img = document.getElementById('myimg' + i);
      displayImage(imageRef, img);
      i++;
      //console.log(img)
      // And finally display them
      
    });
  }).catch(function(error) {
    "Can't load images"
  });
 }
 function displayImage(imageRef, img) {
  imageRef.getDownloadURL().then(function(url) {
    img.setAttribute('src', url);
  }).catch(function(error) {
    // Handle any errors
  });
}
  return (
    <div className="flex cursor-pointer relative top-0 left-0">
    <motion.img className="w-40 h-40 relative top-0 left-0 rounded-md z-50 shadow-lg object-center object-cover"
     src="src\assets\profile.png" alt="pic" id="myimg1" whileHover={{translateY: -30, transition: {duration: 0.2}}}/>
    <motion.img className="w-40 h-40 rounded-md absolute shadow-lg z-40 left-12 top-2  object-center object-cover"
     src="src\assets\profile.png" alt="pic" id="myimg2" whileHover={{translateY: -30, transition: {duration: 0.2}}}/>
    <motion.img className="w-40 h-40 rounded-md absolute shadow-lg z-30 left-24 top-4 object-center object-cover"
     src="src\assets\profile.png" alt="pic" id="myimg3" whileHover={{translateY: -30, transition: {duration: 0.2}}} />
    <motion.img className="w-40 h-40 rounded-md absolute shadow-lg z-20 left-36 top-6 object-center object-cover"
     src="src\assets\profile.png" alt="pic" id="myimg4"  whileHover={{translateY: -30, transition: {duration: 0.2}}}/>
    <motion.img className="w-40 h-40 rounded-md absolute shadow-lg left-48 top-8  object-center object-cover"
     src="src\assets\profile.png" alt="pic" id="myimg5" whileHover={{translateY: -30, transition: {duration: 0.2}}} />
    </div>
  )
}

export default ShowcaseImg