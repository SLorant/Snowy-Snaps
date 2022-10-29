
const AddHuskyButton = ( {onAdd,showAdd}) => {
  return (
    <div>
        <button text={showAdd ? 'Close' : 'Add'} onClick= {onAdd}>
        Add Your Own Husky
        </button>
            
    </div>
  )
}

export default AddHuskyButton