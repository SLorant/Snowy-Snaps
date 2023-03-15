import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <div className="z-10 flex h-[120px] w-full items-center justify-center bg-cream  dark:bg-blue md:h-[80px]">
      <div
        className="ml-5 mr-2 flex w-full items-center justify-between font-body text-sm text-darkblue
         dark:text-cream  sm:mx-8 sm:justify-between  sm:gap-6 md:mx-12 md:text-base xl:text-lg 2xl:w-3/4">
        <div className="flex flex-col gap-2  md:flex-row md:gap-4 xl:gap-8">
          <div>
            <Link to="privacypolicy"> Privacy Policy</Link>
          </div>

          <div>
            <Link to="cookiepolicy"> Cookie Policy</Link>
          </div>
          <div>
            <Link to="termsconditions"> Terms and conditions</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-right   text-xs sm:text-sm md:text-base lg:flex-row lg:gap-6 xl:gap-10">
          <div>contact.snowysnaps@gmail.com</div>
          <div>
            <p className="hidden sm:inline">Copyright</p> © 2023 Lóránt Sutus{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
