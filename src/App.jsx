import Gallery from './components/gallerycomp/Gallery'
import HomePage from './components/homepagecomp/HomePage'
import HuskyPedia from './components/huskypediacomp/HuskyPedia'
import SignInPage from './components/authcomp/SignUpPage'
import LoginPage from './components/authcomp/LoginPage'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthProvider } from './contexts/AuthContext'
import Profile from './components/profilecomp/Profile'
import MySnaps from './components/profilecomp/mysnaps/MySnaps'
import ChangeUserAvatar from './components/profilecomp/ChangeUserAvatar'
import WithAuth from './components/WithAuth'
import ForgotPassword from './components/authcomp/ForgotPassword'
import TermsConditions from './legaldocuments/TermsConditions'
import PrivacyPolicy from './legaldocuments/PrivacyPolicy'
import CookiePolicy from './legaldocuments/CookiePolicy'

function App() {
  const ProtectedProfile = WithAuth(Profile)
  const ProtectedChangeUserAvatar = WithAuth(ChangeUserAvatar)

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="learn" element={<HuskyPedia />} />
            <Route path="watch" element={<Gallery />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/profile/me" element={<ProtectedProfile />} />
            <Route path="/profile/:userId/gallery" element={<MySnaps />} />
            <Route path="termsconditions" element={<TermsConditions />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="cookiepolicy" element={<CookiePolicy />} />
          </Route>
          <Route path="signup" element={<SignInPage />} />
          <Route path="upload-profile" element={<ProtectedChangeUserAvatar />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
