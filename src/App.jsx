import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />

        {/* about */}
        <Route path='/about' element={<About />} />

        {/* Profile */}
        <Route path='/profile' element={<Profile />} />
        {/* Sign-In */}
        <Route path='/sign-in' element={<SignIn />} />

        {/* Sign Up */}
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
