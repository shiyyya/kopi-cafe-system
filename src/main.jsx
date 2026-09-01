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
import LogIn from './customer/pages/Login/Login.jsx';
import SignUp from './customer/pages/signup/signup.jsx';
import Walkin_Customer from './staff/pages/walk-in/walk-in.jsx';


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
           <Route path="login" element={<LogIn />} />
           <Route path="signup" element={<SignUp />} />
           <Route path="walk-in" element={<Walkin_Customer />}/>
           <Route>
          </Route>
           <Route>
            <Route>
          </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)