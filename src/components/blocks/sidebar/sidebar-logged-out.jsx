import './sidebar.css';
import CrownLogo from '/src/assets/logo/logo.svg?react';
import CloseIcon from '/src/assets/icons/close.svg?react';
import PersonIcon from '/src/assets/icons/login.svg?react';
import ChevronRightIcon from '/src/assets/icons/chevron.svg?react';
import PinIcon from '/src/assets/icons/location.svg?react';
import CupIcon from '/src/assets/icons/cap.svg?react';
import HistoryIcon from '/src/assets/icons/time.svg?react';
import GearIcon from '/src/assets/icons/settings.svg?react';

const MENU_ITEMS = [
  { key: 'store-locator', label: 'Store Locator', icon: PinIcon, guestAccess: true },
  { key: 'order-status', label: 'Order Status', icon: CupIcon, guestAccess: false },
  { key: 'order-history', label: 'Order History', icon: HistoryIcon, guestAccess: false },
  { key: 'settings', label: 'Settings', icon: GearIcon, guestAccess: false },
];

export default function SidebarLoggedOut({
  isOpen = false,
  onClose,
  onNavigate,
  onLogin,
}) {
  if (!isOpen) return null;

  const handleItemClick = (item) => {
    if (!item.guestAccess) {
      onLogin?.();
      return;
    }
    onNavigate?.(item.key);
  };

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

        <button type="button" className="loginSignupBtn" onClick={onLogin}>
          Log In / Sign Up
        </button>

        <nav className="sidebarNav">
          {MENU_ITEMS.map((item) => {
            const { key, label, icon: Icon, guestAccess } = item;
            return (
              <button
                key={key}
                type="button"
                className={`sidebarNavItem${!guestAccess ? ' sidebarNavItemLocked' : ''}`}
                onClick={() => handleItemClick(item)}
                aria-disabled={!guestAccess}
              >
                <span className="navItemLeft">
                  <Icon className="navItemIcon" />
                  <span>{label}</span>
                </span>
                <ChevronRightIcon className="navItemChevron" />
              </button>
            );
          })}
        </nav>

        <div className="sidebarFooter">
          <button type="button" className="loginBtn" onClick={onLogin}>
            <PersonIcon className="footerIcon" />
            <span>Log In</span>
          </button>
        </div>
      </aside>
    </>
  );
}