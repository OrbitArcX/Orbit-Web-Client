import { Routes, Route } from 'react-router-dom'
import Stock from '../components/Vendor/Stock'
import Orders from '../components/Vendor/Orders'
import Notifications from '../components/Vendor/Notifications'
import UserProfile from '../components/Vendor/UserProfile'
import Layout from '../pages/LayoutVendor'
import Comments from '../components/Vendor/Comments'

const vendorRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/vendor" element={<Layout />}>
          <Route path="/vendor/stock" element={<Stock />} />
          <Route path="/vendor/orders" element={<Orders />} />
          <Route path="/vendor/notifications" element={<Notifications />} />
          <Route path="/vendor/userProfile" element={<UserProfile />} />
          <Route path="/vendor/comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default vendorRoutes
