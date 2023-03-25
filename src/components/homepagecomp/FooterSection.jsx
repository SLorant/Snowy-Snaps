import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <div className="z-10 flex h-[120px] w-full items-center justify-center bg-cream  dark:bg-blue md:h-[80px] lg:h-14 xl:h-[80px]">
      <div
        className="ml-5 mr-2 flex w-full items-center justify-between font-body text-sm text-darkblue
         dark:text-cream  sm:mx-8 sm:justify-between  sm:gap-6 md:mx-12 md:text-sm lg:mx-6 xl:text-base 2xl:w-5/6 ">
        <div className="flex flex-col gap-2  md:flex-row md:gap-4 xl:gap-8">
          <div>
            <Link className="underline" to="privacypolicy">
              Privacy Policy
            </Link>
          </div>

          <div>
            <Link className="underline" to="cookiepolicy">
              Cookie Policy
            </Link>
          </div>
          <div>
            <Link className="underline" to="termsconditions">
              Terms and conditions
            </Link>
          </div>
        </div>
        <div
          className="flex flex-col gap-2 text-right  text-xs sm:text-sm md:gap-1 lg:flex-row  lg:gap-6 lg:text-sm xl:gap-10
         xl:text-base">
          <div>
            <a className="w-auto underline" href="https://github.com/SLorant/Snowy-Snaps" target="_blank">
              View GitHub page
            </a>
          </div>
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
