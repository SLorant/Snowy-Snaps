import Slider from '@mui/material/Slider';
import { useState, useRef, React } from "react";
import AvatarEditor from "react-avatar-editor";
import ReactSlider from "react-slider";
import { motion } from 'framer-motion'

const ImageEditor = ({picture, setPicture, setFile, editor, isGallery, setEmotion}) => {
   

    const handleSlider = (event, value) => {
        setPicture({
          ...picture,
          zoom: value
        });
      };
    
      const handleCancel = () => {
        setPicture({
          ...picture,
          cropperOpen: false
        });
      };
      const setEditorRef = (ed) => {
        editor = ed;
      };

      async function handleSave(e) {
        if (setEditorRef) {
          const canvasScaled = editor.getImageScaledToCanvas();
          const croppedImg = canvasScaled.toDataURL();
          //const url = canvasScaled.createObjectURL();
          //let url = URL.createObjectURL(croppedImg);
          function dataURItoBlob(dataURI) {
            var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
               array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], {type: mime});
          }
          var objecturl = URL.createObjectURL(dataURItoBlob(croppedImg));

          let blob = await fetch(objecturl).then(r => r.blob());
          var file = new File([blob], "my_image.png",{type:"image/png", lastModified:new Date().getTime()})
          setFile(file)

          setPicture({
            ...picture,
            img: null,
            cropperOpen: false,
            croppedImg: croppedImg
          });
          //setFile(canvasScaled.toDataURL());
        }
      };
     const [width, setWidth] = useState(400)
      const [height, setHeight] = useState(225) 
      //const [border, setBorder] = useState(100)
      
      /* const CropRatioChange = (ratio) => {
        if(ratio ==="16:9") {setWidth(400); setHeight(225)}
        if(ratio ==="4:3") {setWidth(400); setHeight(300)}
      }; */

    



  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/70 z-50">
            <div className='w-2/3 h-4/5 rounded-xl bg-white flex justify-around items-center'>
              <div className="ml-10 w-80 flex flex-col justify-center items-center">
            <AvatarEditor
              className="mt-8 mb-8 z-50 rounded-xl"
              ref={setEditorRef}
              image={picture.img}
              borderRadius= {isGallery ? 0 : 100}
              width={isGallery ? width : 200}
              height={isGallery ? height : 200}
              border={100}
              color={[255, 255, 255, 0.6]} // RGBA
              backgroundColor="teal" 
              rotate={0}
              scale={picture.zoom}
            />
            
              </div>
              <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
              {isGallery && <button className="w-2" onClick={() => {setWidth(400); setHeight(225)} }>16:9</button>}
              {isGallery && <button className="w-2" onClick={() => {setWidth(225); setHeight(400)} }>9:16</button>}
              {isGallery && <button className="w-2" onClick={() => {setWidth(400); setHeight(300)} }>4:3</button>}
              {isGallery && <button className="w-2" onClick={() => {setWidth(300); setHeight(400)} }>3:4</button>}
              {isGallery && <button className="w-2" onClick={() => {setWidth(400); setHeight(400)} }>1:1</button>}
              </div>
              <div className="flex flex-col items-center justify-center">
              {isGallery && <button className="w-2" onClick={() => {setEmotion("happy")} }>Happy</button>}
              {isGallery && <button className="w-2" onClick={() => {setEmotion("funny")} }>Funny</button>}
              {isGallery && <button className="w-2" onClick={() => {setEmotion("sad")} }>Sad</button>}
              </div>

              <Slider 
              className="w-40"
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.1}
              onChange={handleSlider}
            />
              <div className="flex gap-8 mb-8">
            <motion.button onClick={handleCancel} className="flex justify-center items-center text-white text-lg rounded-md bg-zinc-700 font-hlight font-bold
         border-2  w-40 h-12  border-slate-400 mt-12 cursor-pointer shadow-[0px_3px_1px_1px_rgba(0,0,0,0.6)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Cancel</motion.button>
              <motion.button onClick={handleSave} className="flex justify-center items-center text-white text-lg rounded-md bg-green-700 font-hlight font-bold
         border-2  w-40 h-12  border-slate-400 mt-12 cursor-pointer shadow-[0px_3px_1px_1px_rgba(0,0,0,0.6)]"
         whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}>Save</motion.button>
         </div>
              </div>
            </div>
          </div>
  )
}

export default ImageEditor