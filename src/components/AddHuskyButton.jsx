
const AddHuskyButton = ( {onAdd,showAdd}) => {
  return (
    <div className="flex justify-center items-center mt-3">
        <p text={showAdd ? 'Close' : 'Add'} onClick= {onAdd}
        className="h-18 text-center  md:text-md lg:text-lg 2xl:text-xl tracking-widest 
        font-cutefont font-bold p-10  text-white  py-2 px-4 rounded-2xl ">
        Add Your Own Husky
        </p>
            
    </div>
  )
}
//bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded
export default AddHuskyButton