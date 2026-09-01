import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Home from './customer/pages/home/home.jsx';
import StoreLocator from './customer/pages/store-locator/store-locator.jsx';
import OrderStatus from './customer/pages/order-status/order-status.jsx';
import OrderHistory from './customer/pages/order-history/order-history.jsx';
import Settings from './customer/pages/settings/settings.jsx';
import PlaceOrder from './customer/pages/place-order/place-order.jsx';
import DeliveryEligibility from './components/blocks/delivery-eligibility/delivery-eligibility.jsx';
import Login from './components/cards/login/login.jsx';
import Signup from './components/cards/signup/signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="store-locator" element={<StoreLocator />} />
          <Route path="order-status" element={<OrderStatus />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="settings" element={<Settings />} />
          <Route path="place-order" element={<PlaceOrder />} />
          <Route path="delivery-eligibility" element={<DeliveryEligibility />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);