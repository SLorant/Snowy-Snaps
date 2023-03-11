import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <div className="z-10 flex h-[300px] w-full  flex-col bg-blue   shadow-[0px_3px_10px_10px_rgba(0,0,0,0.3)] ">
      <div className="mt-20 flex flex-col items-center justify-center gap-6 font-header text-xl text-cream">
        <Link to="cookiepolicy"> Cookie Policy</Link>
        <Link to="privacypolicy"> Privacy Policy</Link>
        <Link to="termsconditions"> Terms and conditions</Link>
      </div>
    </div>
  )
}

export default FooterSection
