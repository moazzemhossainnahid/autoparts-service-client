
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
import AutoParts from './Pages/AutoParts/AutoParts'
import Services from './Pages/Services/Services'
import Stafs from './Pages/Stafs/Stafs'
import ManageParts from './Components/Dashboard/AdminDashboard/ManageParts/ManageParts'
import ManageServices from './Components/Dashboard/AdminDashboard/ManageServices/ManageServices'
import ManageStafs from './Components/Dashboard/AdminDashboard/ManageStafs/ManageStafs'
import SinglePartsDetails from './Components/Pages/Parts/SinglePartsDetails'
import SingleServicesDetails from './Components/Pages/Services/SingleServicesDetails'
import Success from './Components/Others/Success/Success'
import Checkout from './Components/Pages/Checkout/Checkout'
import ManageBookings from './Components/Dashboard/AdminDashboard/ManageBookings/ManageBookings'
import ManageOrders from './Components/Dashboard/AdminDashboard/ManageOrders/ManageOrders'

function App() {

  return (
    <>
      <div className="App pt-20">
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mparts' && window.location.pathname !== '/cpanel/mservices' && window.location.pathname !== '/cpanel/mstafs' && window.location.pathname !== '/cpanel/addparts' && window.location.pathname !== '/cpanel/addservice' && window.location.pathname !== '/cpanel/addstaf' && window.location.pathname !== '/cpanel/mbookings' && window.location.pathname !== '/cpanel/morders') && <Header />}
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/parts' element={<AutoParts />} />
            <Route path='/parts/:id' element={<RequireAuth><SinglePartsDetails /></RequireAuth>} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/:id' element={<RequireAuth><SingleServicesDetails /></RequireAuth>} />
            <Route path='/stafs' element={<Stafs />} />
            <Route path='/cart' element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path='/checkout/:id' element={<RequireAuth><Checkout /></RequireAuth>} />
            <Route path="/ssl-payment-success" element={<RequireAuth><Success/></RequireAuth>} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              <Route path="mparts" element={<ManageParts />} />
              <Route path="mservices" element={<ManageServices />} />
              <Route path="morders" element={<ManageOrders />} />
              <Route path="mstafs" element={<ManageStafs />} />
              <Route path="mbookings" element={<ManageBookings />} />
            </Route>
          </Routes>
        </div>
        {(window.location.pathname !== '/cart' && window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mparts' && window.location.pathname !== '/cpanel/mservices' && window.location.pathname !== '/cpanel/mstafs' && window.location.pathname !== '/cpanel/addparts' && window.location.pathname !== '/cpanel/addservice' && window.location.pathname !== '/cpanel/addstaf' && window.location.pathname !== '/cpanel/mbookings' && window.location.pathname !== '/cpanel/morders') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
