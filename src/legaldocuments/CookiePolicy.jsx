import React from 'react'

const CookiePolicy = () => {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center dark:bg-darkblue">
      <div className="mt-32 flex w-1/2 flex-col items-center justify-center">
        <h1 className="mb-8 font-header text-5xl text-blue dark:text-peach">Cookie Policy</h1>
        <div className="mb-4 w-4/5 font-body text-lg dark:text-cream">
          This is the Cookie Policy for Snowy Snaps, accessible from www.snowysnaps.firebaseapp.com
        </div>
      </div>

      <ol className="mx-60 w-1/2  font-body dark:text-cream">
        <li className="font-body text-lg">
          <h2 className="text-2xl font-bold"> 1. What Are Cookies?</h2>
          <li>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files
            that are downloaded to your computer, to improve your experience. This page describes what information they
            gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can
            prevent these cookies from being stored, however, this may downgrade or 'break' certain elements of the
            site's functionality.
          </li>
        </li>
        <li className="font-body text-lg">
          <h2 className="text-2xl font-bold"> 2. How We Use Cookies</h2>
          <li>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry
            standard options for disabling cookies without completely disabling the functionality and features they add
            to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or
            not, in case they are used to provide a service that you use.
          </li>
        </li>
        <li className="font-body text-lg">
          <h2 className="text-2xl font-bold"> 3. Disabling Cookies</h2>
          <li>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser's Help
            section for how to do this). Be aware that disabling cookies will affect the functionality of this and many
            other websites that you visit. Disabling cookies will usually result in also disabling certain functionality
            and features of the site. Therefore, it is recommended that you do not disable cookies.
          </li>
        </li>
        <li className="font-body text-lg">
          <h2 className="text-2xl font-bold"> 4. The Cookies We Set</h2>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be
              switched off in our systems. They are usually only set in response to actions made by you which amount to
              a request for services, such as setting your privacy preferences, logging in or filling in forms. You can
              set your browser to block or alert you about these cookies, but some parts of the site will not then work.
              These cookies do not store any personally identifiable information.
            </li>
            <li>
              <strong>Google Analytics Cookies:</strong> These cookies are used to collect information about how
              visitors use our site. We use the information to compile reports and to help us improve the site. The
              cookies collect information in an anonymous form, including the number of visitors to the site, where
              visitors have come to the site from, and the pages they visited. For more information on Google Analytics
              cookies, see the official Google Analytics page.
            </li>
            <li>
              <strong>Third-Party Cookies:</strong> In some special cases, we also use cookies provided by trusted third
              parties. The following section details which third-party cookies you might encounter through this site.
              <p className="my-4">
                This site uses Firebase, which is a mobile and web application development platform developed by Google.
                Firebase uses Google Analytics to collect information about how visitors use our site. The information
                collected is used to compile reports and to help us improve the site. The cookies collect information in
                an anonymous form, including the number of visitors to the site, where visitors have come to the site
                from, and the pages they visited. For more information on Firebase and Google Analytics cookies, see the
                Firebase and Google Analytics documentation.
              </p>
            </li>
          </ul>
        </li>
        <li className="mb-10 font-body text-lg">
          <h2 className="text-2xl font-bold"> 5. More Information</h2>
          <li>If you are still looking for more information, you can contact us by email at sutuslorant@gmail.com.</li>
        </li>
      </ol>
    </div>
  )
}

export default CookiePolicy
