import { useState } from 'react'
import { PropTypes } from 'prop-types'
import { FileUploader } from 'react-drag-drop-files'

const LeftForm = ({ onAdd }) => {
  const [text, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState('flex')
  const fileTypes = ['JPG', 'PNG', 'GIF']

  const onSubmit = (e) => {
    console.log(e.target.value)
    onAdd({ text, age, gender })
    console.log('hello')
    setName('')
    setAge('')
    setGender(false)
  }

  function DragDrop() {
    const [file, setFile] = useState(null)
    const handleChange = (file) => {
      setFile(file)
    }
    return <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  }

  setTimeout(() => {
    setDisplay(() => {
      if (document.getElementById('hiddentext')) {
        const el = document.getElementById('hiddentext')
        el.style.display = 'none'
      }
    })
  }, 5000)
  return (
    <div>
      <form className="left-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Husky name</label>
          <input
            type="text"
            placeholder="Husky neve"
            value={text}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Husky's birth</label>
          <input
            type="date"
            placeholder="Husky kora"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <legend>Husky gender:</legend>
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === 'male'}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === 'female'}
          />
        </div>

        <legend>Choose traits! (It's optional)</legend>
        <label htmlFor="red">🐶</label>
        <input type="checkbox" name="favcolor" id="red" value="red" />
        <label htmlFor="green">🐺</label>
        <input type="checkbox" name="favcolor" id="green" value="green" />
        <label htmlFor="blue">Blue</label>
        <input type="checkbox" name="favcolor" id="blue" value="blue" />

        <FileUploader />

        <input className="btn" type="submit" value="Save" onClick={() => setShow(!show)} />
      </form>
      {show ? (
        <p id="hiddentext" style={{ display: display }}>
          {' '}
          Cute name!
        </p>
      ) : null}
    </div>
  )
}

// You added: {text}, {age} , {gender} <br />
//{!show && <p id='hiddentext' style={{'display': display}}> Husky saved</p>}
LeftForm.defaultProps = {
  text: '',
  age: '',
  gender: 'female',
}

LeftForm.propTypes = {
  text: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
}
export default LeftForm
