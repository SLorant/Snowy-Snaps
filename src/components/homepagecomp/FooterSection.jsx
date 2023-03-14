import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <div className="z-10 flex h-[150px] w-full  items-center  justify-center bg-cream   ">
      <div
        className="mx-4 flex w-full items-center justify-between gap-6 font-body text-darkblue  sm:mx-10 
      sm:text-lg md:mx-0  md:w-2/3 lg:w-1/2 2xl:w-1/3">
        <div className="flex flex-col gap-1">
          <div>
            <Link to="privacypolicy"> Privacy Policy</Link>
          </div>
          <Link to="termsconditions"> Terms and conditions</Link>
          <div>
            <Link to="cookiepolicy"> Cookie Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Contact me: <br /> sutuslorant@gmail.com
          </p>

          <p>Copyright © 2023 Lóránt Sutus </p>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
