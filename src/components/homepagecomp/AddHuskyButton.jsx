
const AddHuskyButton = ( {onAdd,showAdd}) => {
  return (
    <div data-aos="fade-down" data-aos-offset="10" data-aos-once= "true" className="h-20 mt-8  flex justify-center items-center">
    <div  className="shadow-lg bg-white rounded-md transition cursor-pointer ease-in-out hover:border-2 border-slate-800 border-dashed hover:scale-105  duration-500">
        <p text={showAdd ? 'Close' : 'Add'} onClick= {onAdd}
        className="h-18  text-center  md:text-md lg:text-lg 2xl:text-xl tracking-widest 
        font-cutefont font-bold  text-slate-800  py-2 px-4 ">
        Add Your Own Husky
        </p>
            
    </div>
    </div>
  )
}
//bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded
export default AddHuskyButton