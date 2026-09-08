import { Outlet, Link } from 'react-router'
import './App.css'

function App() {
  return (
     <div>
       <div>
         <Outlet />
      
      </div>
      <Link to="store-locator">Store Locator</Link><br />
      <Link to="settings">Settings</Link><br />
      <Link to="order-status">Order Status</Link><br />
      <Link to="order-history">Order History</Link><br />
      <Link to="place-order">Place Order</Link><br />
      <Link to="delivery-eligibility">Delivery Eligibility</Link><br />
      <Link to="login">Login</Link><br />
      <Link to="signup">Sign Up</Link><br />
      <Link to="qr-payment">QR Payment</Link><br />
      <Link to="payment-confirmation">Payment Confirmation</Link><br />
    </div>
  )
}
    
  

export default App