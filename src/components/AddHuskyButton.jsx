
const AddHuskyButton = ( {onAdd,showAdd}) => {
  return (
    <div>
        <button text={showAdd ? 'Close' : 'Add'} onClick= {onAdd}
        className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded">
        Add Your Own Husky
        </button>
            
    </div>
  )
}

export default AddHuskyButton