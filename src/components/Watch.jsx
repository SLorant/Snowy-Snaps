import WatchButton from './WatchButton'

const Watch = () => {
  return (
    <div className="flex flex-col w-1/3 bg-gradient-to-b from-stone-700 to-cyan-100  h-80 rounded-2xl z-10  ">
         <a href="#husky-media"><WatchButton/></a>
        <div className="flex flex-col justify-center items-center">
       <img src="src/assets/huskygif.gif" alt="huskygif" className=' shadow-lg max-h-28 xl:max-h-32 2xl:max-h-36 my-2 rounded-full' />
        
       
       <a href="#husky-media"><svg xmlns="http://www.w3.org/2000/svg" className="  transition cursor-pointer ease-in-out delay-150 hover:translate-y-6 hover:scale-100  duration-500"
         width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="15" x2="12" y2="19" />
  <line x1="8" y1="15" x2="12" y2="19" />
</svg></a> 
        </div>
        </div>
  )
}
/* <img src="src/assets/arrow6.png" alt="arrow"  className="
        transition cursor-pointer ease-in-out delay-150 hover:translate-y-10 hover:scale-100  duration-500 max-h-32"/>
*/
export default Watch