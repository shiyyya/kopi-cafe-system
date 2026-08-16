import { Outlet, Link } from 'react-router'
import './App.css'
import StoreLocator from './pages/store-locator/store-locator.jsx';
import OrderStatus from './pages/order-status/order-status.jsx';
import OrderHistory from './pages/order-history/order-history.jsx';
import Settings from './pages/settings/settings';
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
    </div>
  )
}

export default App
