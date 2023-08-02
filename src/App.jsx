import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import RequireAuth from './Components/Others/RequireAuth/RequireAuth'
import Signin from './Pages/Auth/Signin/Signin'
import Signup from './Pages/Auth/Signup/Signup'
import NotFound from './Pages/NotFound/NotFound'
import Profile from './Components/Dashboard/UserDashboard/Profile/Profile'
import CPanel from './Components/Dashboard/AdminDashboard/Admin/CPanel'
import AdDashboard from './Components/Dashboard/AdminDashboard/Dashboard/AdDashboard'
import ManageUsers from './Components/Dashboard/AdminDashboard/ManageUsers/ManageUsers'
import RequireAdmin from './Components/Others/RequireAdmin/RequireAdmin'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App pt-20">
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mparts' && window.location.pathname !== '/cpanel/mservices' && window.location.pathname !== '/cpanel/mstafs') && <Header />}
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<RequireAuth><Cart /></RequireAuth>} />
            {/* <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} /> */}
            {/* <Route path="/ssl-payment-success/:id" element={<RequireAuth><Success/></RequireAuth>} /> */}
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              {/* <Route path="mproducts" element={<ManageProducts />} />
              <Route path="morders" element={<ManageOrders />} />
              <Route path="mappointments" element={<ManageAppointments />} /> */}
            </Route>
          </Routes>
        </div>
        {(window.location.pathname !== '/cart' && window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mparts' && window.location.pathname !== '/cpanel/mservices' && window.location.pathname !== '/cpanel/mstafs') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
