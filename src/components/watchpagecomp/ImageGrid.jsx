import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
//import { useForceUpdate } from './useForceUpdate'

const ImageGrid = ({ setSelectedImg, order, emotion, limit }) => {
    const [time, setTime] = useState('desc')
    const [f, setF] = useState('desc');
   
      let count = 0;
    
    // let {docs} = ""

   /*  function updateDocs(f){
        ({docs} = useFirestore('images', f))
    } */ 
    //const time = timeSort
    
    function OnClickFunc() {
        setF('asc')
    }
   
    

    //emotion='happy'
    
    //if (order==='asc' && emotion==='happy') {({docs}  = useFirestore('images', order, emotion, limit))}
    const {docs}  = useFirestore('images', order, emotion, limit)
    
   
     
    

//useFirestore('images', timeSort)
  return (
    <div className=" h-[1000px] ">
      
        <div className="mx-2 md:mx-10 lg:mx-20 flex justify-center items-center">
            
            <div className="columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-3 mx-auto space-y-3 pb-28 mt-4 mx-4">

                {  docs && docs.map(doc => (
                 <motion.div className="break-inside-avoid" key={doc.id}
                 layout
                 onClick={() => {setSelectedImg(doc.url)}}>
                <motion.img  src={doc.url} className=" hover:opacity-100 opacity-80 rounded-lg" loading="lazy" alt="huskypic"
                    initial = {{ opacity: 0}}
                    animate = {{ opacity: 1}}
                    transition = {{ delay: 1}} />
                </motion.div>)) }

            </div>
            </div>
        </div>
  )
}

export default ImageGrid