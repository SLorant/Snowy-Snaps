import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center dark:bg-darkblue">
      <h1 className="mb-8 mt-32 font-header text-4xl text-blue dark:text-peach md:text-5xl">Privacy Policy</h1>
      <div className=" flex w-4/5 flex-col items-center justify-center md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="mb-4 w-4/5 font-body dark:text-cream md:text-lg">
          Snowy Snaps is committed to protecting the privacy of its users. This Privacy Policy describes how we collect,
          use, and disclose your personal information when you use our website.
        </div>
      </div>
      <ol className="mx-60 w-5/6 font-body dark:text-cream md:w-3/4 md:text-lg lg:w-2/3 xl:w-1/2">
        <li className="font-body ">
          <h2 className="text-2xl font-bold"> 1. Information We Collect</h2>
          <li>
            We collect your email address when you sign up for our newsletter or contact us through email. We use
            Firebase to collect information about how you use our website, including your IP address, browser type,
            referring/exit pages, and date/time stamps.
          </li>
        </li>
        <li className="font-body ">
          <h2 className="text-2xl font-bold">2. Use of Your Information</h2>
          <li>
            We use your email address to send you newsletters and to respond to your inquiries. We use Firebase and
            Google Analytics to analyze how you use our website and to improve our services.
          </li>
        </li>
        <li className="font-body ">
          <h2 className="text-2xl font-bold">3. Sharing of Your Information</h2>
          <li>
            We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your
            information with our service providers who help us operate our website or analyze user behavior.
          </li>
        </li>
        <li className="font-body ">
          <h2 className="text-2xl font-bold"> 4. Cookies and Other Technologies</h2>
          <li>
            We use cookies and other technologies to enhance your experience on our website. Cookies are small data
            files that are stored on your device when you visit a website. We use both session cookies (which expire
            when you close your browser) and persistent cookies (which remain on your device until they expire or you
            delete them).
          </li>
        </li>
        <li className="font-body ">
          <h2 className="text-2xl font-bold">5. Data Security</h2>
          <li>
            We take reasonable measures to protect your personal information from unauthorized access, use, or
            disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </li>
        </li>
        <li className="font-body ">
          <h2 className="text-2xl font-bold">6. Your Rights</h2>
          <li>
            You have the right to access, correct, or delete your personal information. You can unsubscribe from our
            newsletter at any time by clicking the "unsubscribe" link in the email.
          </li>
        </li>
        <li className="font-body ">
          <h2 className="text-2xl font-bold">7. Changes to This Privacy Policy</h2>
          <li>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </li>
        </li>
        <li className="mb-10 font-body ">
          <h2 className="text-2xl font-bold">8. Contact Us</h2>
          <li>
            If you have any questions or concerns about this Privacy Policy, please contact us at
            contact.snowysnaps@gmail.com.
          </li>
        </li>
      </ol>
    </div>
  )
}

export default PrivacyPolicy
