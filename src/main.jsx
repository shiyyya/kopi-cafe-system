import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Home from './pages/home/home.jsx';
import StoreLocator from './pages/store-locator/store-locator.jsx';
import OrderStatus from './pages/order-status/order-status.jsx';
import OrderHistory from './pages/order-history/order-history.jsx';
import Settings from './pages/settings/settings';
import Profile from './pages/profile/profile.jsx';

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
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)