import LearnButton from "./LearnButton"

const Learn = () => {
  return (
    <div className="flex flex-col w-1/3 bg-gradient-to-b from-sky-900 to-cyan-100  h-80 rounded-t-2xl z-10 ">
        <LearnButton/>
        <div className="flex flex-col justify-center items-center">
       
        <p className="font-hlight text-white text-center my-6 mx-6">Blue eyes are pretty rare in most dog breeds, but many huskies are born with bright, blue peepers. Heterochromia—or eyes of two different colors—is also fairly... </p>
        <svg xmlns="http://www.w3.org/2000/svg" className="transition cursor-pointer ease-in-out delay-150 hover:translate-y-6 hover:scale-100  duration-500"
         width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="15" x2="12" y2="19" />
  <line x1="8" y1="15" x2="12" y2="19" />
</svg>
        </div>
    </div>
  )
}

//common among huskies, and often results in blue, gold, brown, or orangey-colored eyes.
export default Learn