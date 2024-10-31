import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import { Routes, Route, useLocation } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PasswordResetRequest from "./components/PasswordResetRequest"
import PasswordReset from "./components/PasswordReset"
import Index from "./components/Index"
import Saved from "./components/drafts/Saved"
import Published from "./components/drafts/Published"


function App() {

  const location = useLocation();
  const noNavbar = location.pathname === "/register" || location.pathname === "/" || location.pathname === "/login" || location.pathname.includes("password")

  return (
    <>
    {
      noNavbar ?

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request/password_reset" element={<PasswordResetRequest />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
      </Routes>
      
      :

      <Navbar 
        content = {
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Saved" element={<Saved />} />
              <Route path="/Published" element={<Published />} />
            </Route>
          </Routes>
        }
      />

    }
    </>
  )
}

export default App
