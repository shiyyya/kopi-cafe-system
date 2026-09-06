import { Link } from 'react-router';
import './sidebar.css';
import CrownLogo from '/src/assets/logo/logo.svg?react';
import CloseIcon from '/src/assets/icons/close.svg?react';
import PersonIcon from '/src/assets/icons/login.svg?react';
import PinIcon from '/src/assets/icons/location.svg?react';
import CupIcon from '/src/assets/icons/cap.svg?react';
import HistoryIcon from '/src/assets/icons/time.svg?react';
import GearIcon from '/src/assets/icons/settings.svg?react';
import LinkButton from '/src/components/elements/button/link-button/link-button.jsx';

const MENU_ITEMS = [
  { key: 'store-locator', label: 'Store Locator', icon: PinIcon, goto: '/store-locator', guestAccess: true },
  { key: 'order-status', label: 'Order Status', icon: CupIcon, goto: '/login', guestAccess: false },
  { key: 'order-history', label: 'Order History', icon: HistoryIcon, goto: '/login', guestAccess: false },
  { key: 'settings', label: 'Settings', icon: GearIcon, goto: '/login', guestAccess: false },
];

export default function SidebarLoggedOut({
  isOpen = false,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <>
      <div className="sidebarOverlay" onClick={onClose} />

      <aside className="sidebar">
        <div className="sidebarHeader">
          <div className="sidebarBrand">
            <CrownLogo className="brandIcon" />
            <span className="brandName">Kopi Express</span>
          </div>
          <button
            type="button"
            className="sidebarCloseBtn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon className="closeIcon" />
          </button>
        </div>

        <Link to="/login" className="loginSignupBtn" style={{ textDecoration: 'none', textAlign: 'center' }}>
          Log In / Sign Up
        </Link>

        <nav className="sidebarNav">
          {MENU_ITEMS.map((item) => (
            <LinkButton
              key={item.key}
              goto={item.goto}
              icon={item.icon}
              label={item.label}
              type="normal"
            />
          ))}
        </nav>

        <div className="sidebarFooter">
          <Link to="/login" className="loginBtn" style={{ textDecoration: 'none' }}>
            <PersonIcon className="footerIcon" />
            <span>Log In</span>
          </Link>
        </div>
      </aside>
    </>
  );
}