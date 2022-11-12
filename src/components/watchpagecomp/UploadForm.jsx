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
  )
}

export default UploadForm