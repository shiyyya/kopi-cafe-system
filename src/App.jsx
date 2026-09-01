import { Outlet, Link } from 'react-router'
import './App.css'
import StoreLocator from './customer/pages/store-locator/store-locator.jsx';
import OrderStatus from './customer/pages/order-status/order-status.jsx';
import OrderHistory from './customer/pages/order-history/order-history.jsx';
import Settings from './customer/pages/settings/settings';
function App() {
  return (
     <div>
    <div>
      <Outlet />
    </div>
      

      <Link to="store-locator">Store Locator</Link><br></br>
       <Link to="settings">Settings</Link><br></br>
        <Link to="order-status">Order Status</Link><br></br>
         <Link to="order-history">Order History</Link><br></br>
           <Link to="login">Login</Link><br></br>
             <Link to="signup">Signup</Link><br></br>
    </div>
  )
}

export default App
