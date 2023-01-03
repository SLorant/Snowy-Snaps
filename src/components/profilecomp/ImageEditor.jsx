import Slider from '@mui/material/Slider';
import { useState, useRef, React } from "react";
import AvatarEditor from "react-avatar-editor";
import ReactSlider from "react-slider";
import { motion } from 'framer-motion'
import Emoji from '../watchpagecomp/Emoji';
import ChooseButton from './ChooseButton';

const ImageEditor = ({picture, setPicture, setFile, emotion, emotion2, emotion3, editor, isGallery, setEmotion, setEmotion2, setEmotion3}) => {
   
  const [chooseEmotionArray, setChooseEmotionArray] = useState([])
  let [width, setWidth] = useState(400)
  let [height, setHeight] = useState(225) 
  const [selected, setSelected] = useState("16:9")
  const emotions = [
    { label: "happy" }, { label: "silly" }, { label: "relaxed" }, { label: "excited" },
    { label: "confused" }, { label: "mischievous" }, { label: "stubborn" }, { label: "sad" }
  ];
  const ratioButtons = [  
    { width: 225, height: 400, buttonwidth: 'w-9', buttonheight: 'h-16',ratio: '9:16' },
    { width: 300, height: 400, buttonwidth: 'w-11', buttonheight: 'h-14',ratio: '3:4' },
    { width: 400, height: 225, buttonwidth: 'w-16', buttonheight: 'h-9', ratio: '16:9' },
    { width: 400, height: 300, buttonwidth: 'w-14', buttonheight: 'h-11',ratio: '4:3' },
    { width: 400, height: 400, buttonwidth: 'w-12', buttonheight: 'h-12',ratio: '1:1' }
  ];

  const handleOnClickEmoji = (label) => {
    if (chooseEmotionArray.includes(label)) {
      setChooseEmotionArray(arr => arr.filter(item => item !== label))
      emotion === label ? setEmotion("") : emotion2 === label ? setEmotion2("") : setEmotion3("")
    } else if (chooseEmotionArray.length === 3){
      setChooseEmotionArray( arr => [...arr])
    } else {
      setChooseEmotionArray( arr => [...arr, label]);
      emotion === "" ? setEmotion(label) : emotion2 === "" ? setEmotion2(label) : emotion3 === "" ? setEmotion3(label) : ""
    }  
  }
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
        }
      };

     
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/70 z-50">
            <div className='2xl:w-2/3 xl:w-3/4 lg:w-5/6 w-4/5 lg:h-4/5 h-[90%] rounded-xl bg-white flex  lg:flex-row justify-around items-start lg:items-center'>
              <div className="lg:ml-10 lg:mt-0 lg:mr-0 mt-6  lg:my-8  w-80 flex flex-col justify-center items-center">
            <AvatarEditor
              className="ml-20 lg:ml-0 z-50 rounded-xl"
              ref={setEditorRef}
              image={picture.img}
              borderRadius= {isGallery ? 0 : 100}
              width={isGallery ? width : 200}
              height={isGallery ? height : 200}
              border={100}
              color={[255, 255, 255, 0.6]} // RGBA
              backgroundColor="navajowhite" 
              rotate={0}
              scale={picture.zoom}
            />
            
              </div>
              <div className="flex flex-col items-center justify-center">
               {isGallery &&
               <div className=''> <div className="flex flex-col col-span-2 gap-4 lg:w-80 w-32  ml-16 lg:ml-0 mt-4 lg:mt-0 mb-6">
                <p className='text-xl text-center  xl:text-2xl text-blue font-header'>Pick an aspect ratio</p>
                <div className='lg:flex lg:flex-row  grid grid-cols-2 place-items-center justify-center items-center gap-4'>

                {ratioButtons.map(({ width, height, ratio, buttonheight, buttonwidth }) => (
                  <ChooseButton key={ratio} width={width} height={height} ratio={ratio} setWidth={setWidth} setHeight={setHeight}
                  selected={selected} setSelected={setSelected} buttonwidth={buttonwidth} buttonheight={buttonheight}/>
        ))}
      
                </div>
              </div>
              <div className="flex lg:relative bottom-40 left-28 lg:bottom-auto lg:left-auto absolute lg:mt-0 flex-col items-center justify-center">
              <p className='text-xl text-center  xl:text-2xl text-blue font-header mb-2'>Choose up to 3 emotions</p>
              <div className=" gap-4 xl:gap-6 mb-3 grid grid-cols-4 my-2 ">
            {emotions.map(emotion => (
        <div className="flex justify-center items-center w-10" key={emotion.label} onClick={() => handleOnClickEmoji(emotion.label)} >
          <Emoji emotionArray={chooseEmotionArray} source={emotion.label} />
          </div>    
      ))} 
          </div>
              </div>
              </div>}
              <div className='flex flex-col w-60 xl:w-80'>
              <p className='text-xl text-center  xl:text-2xl text-blue font-header mt-6 '>Zoom in or out</p>
              <Slider 
              className="w-32 xl:w-40 mt-2"
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.01}
              onChange={handleSlider}
              style={{ color: '#2D4550' }}
            />
            </div>

              <div className="flex gap-8 mt-10 mb-4">
              <motion.button  className="text-lg flex justify-center items-center bg-sand md:w-24 lg:w-32 xl:w-40  h-12  text-blue
    hover:bg-blue hover:text-peach font-headersc  rounded-md "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
    onClick={() => handleCancel()}>Cancel</motion.button>
              <motion.button  className="text-lg flex justify-center items-center bg-sand md:w-24 lg:w-32 xl:w-40  h-12  text-blue
    hover:bg-blue hover:text-peach font-headersc  rounded-md "
    whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
    onClick={() => handleSave()}>Upload</motion.button>
         </div>
              </div>
            </div>
          </div>
  )
}

export default ImageEditor