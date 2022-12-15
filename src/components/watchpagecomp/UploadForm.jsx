import React from 'react'
import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }
  return (
    <div>
    <form>
        <label htmlFor="">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
        </label>
        <div>
            {error && <div className=""> {error}</div>}
            {file && <div className=""> {file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
    <button className=" right-10 bottom-10 w-24 h-24 rounded-full bg-slate-700 fixed shadow-[2px_5px_1px_1px_rgba(0,0,0,0.7)]">
        <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
        </div>

    </button>
    </div>
  )
}

export default UploadForm