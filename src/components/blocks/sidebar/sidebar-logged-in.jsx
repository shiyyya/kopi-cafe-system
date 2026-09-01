// import './sidebar.css';
// import CrownLogo from '/src/assets/logo/logo.svg?react';
// import CloseIcon from '/src/assets/icons/close.svg?react';
// import UserAvatar from '/src/assets/icons/avatar.svg?react';
// import ChevronRightIcon from '/src/assets/icons/chevron.svg?react';
// import PinIcon from '/src/assets/icons/location.svg?react';
// import CupIcon from '/src/assets/icons/cap.svg?react';
// import HistoryIcon from '/src/assets/icons/time.svg?react';
// import GearIcon from '/src/assets/icons/settings.svg?react';
// import LogoutIcon from '/src/assets/icons/logout.svg?react';

// const MENU_ITEMS = [
//   { key: 'store-locator', label: 'Store Locator', icon: PinIcon },
//   { key: 'order-status', label: 'Order Status', icon: CupIcon },
//   { key: 'order-history', label: 'Order History', icon: HistoryIcon },
//   { key: 'settings', label: 'Settings', icon: GearIcon },
// ];

// export default function SidebarLoggedIn({
//   isOpen = false,
//   user,
//   onClose,
//   onNavigate,
//   onLogout,
// }) {
//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="sidebarOverlay" onClick={onClose} />

//       <aside className="sidebar">
//         <div className="sidebarHeader">
//           <div className="sidebarBrand">
//             <CrownLogo className="brandIcon" />
//             <span className="brandName">Kopi Express</span>
//           </div>
//           <button
//             type="button"
//             className="sidebarCloseBtn"
//             onClick={onClose}
//             aria-label="Close menu"
//           >
//             <CloseIcon className="closeIcon" />
//           </button>
//         </div>

//         <div className="sidebarUser">
//           <UserAvatar className="userAvatarIcon" />
//           <div>
//             <p className="userName">{user?.fullName}</p>
//           </div>
//         </div>

//         <nav className="sidebarNav">
//           {MENU_ITEMS.map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               type="button"
//               className="sidebarNavItem"
//               onClick={() => onNavigate?.(key)}
//             >
//               <span className="navItemLeft">
//                 <Icon className="navItemIcon" />
//                 <span>{label}</span>
//               </span>
//               <ChevronRightIcon className="navItemChevron" />
//             </button>
//           ))}
//         </nav>

//         <div className="sidebarFooter">
//           <button type="button" className="logoutBtn" onClick={onLogout}>
//             <LogoutIcon className="footerIcon" />
//             <span>Log Out</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

// import './sidebar.css';
// import CrownLogo from '/src/assets/logo/logo.svg?react';
// import CloseIcon from '/src/assets/icons/close.svg?react';
// import UserAvatar from '/src/assets/icons/avatar.svg?react';
// import PinIcon from '/src/assets/icons/location.svg?react';
// import CupIcon from '/src/assets/icons/cap.svg?react';
// import HistoryIcon from '/src/assets/icons/time.svg?react';
// import GearIcon from '/src/assets/icons/settings.svg?react';
// import LogoutIcon from '/src/assets/icons/logout.svg?react';
// import LinkButton from '/src/components/elements/button/link-button/link-button.jsx';

// const MENU_ITEMS = [
//   { key: 'store-locator', label: 'Store Locator', icon: PinIcon, goto: '/store-locator' },
//   { key: 'order-status', label: 'Order Status', icon: CupIcon, goto: '/order-status' },
//   { key: 'order-history', label: 'Order History', icon: HistoryIcon, goto: '/order-history' },
//   { key: 'settings', label: 'Settings', icon: GearIcon, goto: '/settings' },
// ];

// export default function SidebarLoggedIn({
//   isOpen = false,
//   user,
//   onClose,
//   onLogout,
// }) {
//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="sidebarOverlay" onClick={onClose} />

//       <aside className="sidebar">
//         <div className="sidebarHeader">
//           <div className="sidebarBrand">
//             <CrownLogo className="brandIcon" />
//             <span className="brandName">Kopi Express</span>
//           </div>
//           <button
//             type="button"
//             className="sidebarCloseBtn"
//             onClick={onClose}
//             aria-label="Close menu"
//           >
//             <CloseIcon className="closeIcon" />
//           </button>
//         </div>

//         <div className="sidebarUser">
//           <UserAvatar className="userAvatarIcon" />
//           <div>
//             <p className="userName">{user?.fullName}</p>
//           </div>
//         </div>

//         <nav className="sidebarNav">
//           {MENU_ITEMS.map((item) => (
//             <LinkButton
//               key={item.key}
//               goto={item.goto}
//               icon={item.icon}
//               label={item.label}
//             />
//           ))}
//         </nav>

//         <div className="sidebarFooter">
//           <button type="button" className="logoutBtn" onClick={onLogout}>
//             <LogoutIcon className="footerIcon" />
//             <span>Log Out</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

import { useNavigate } from 'react-router';
import './sidebar.css';
import CrownLogo from '/src/assets/logo/logo.svg?react';
import CloseIcon from '/src/assets/icons/close.svg?react';
import UserAvatar from '/src/assets/icons/avatar.svg?react';
import PinIcon from '/src/assets/icons/location.svg?react';
import CupIcon from '/src/assets/icons/cap.svg?react';
import HistoryIcon from '/src/assets/icons/time.svg?react';
import GearIcon from '/src/assets/icons/settings.svg?react';
import LogoutIcon from '/src/assets/icons/logout.svg?react';
import LinkButton from '/src/components/elements/button/link-button/link-button.jsx';

const MENU_ITEMS = [
  { key: 'store-locator', label: 'Store Locator', icon: PinIcon, goto: '/store-locator' },
  { key: 'order-status', label: 'Order Status', icon: CupIcon, goto: '/order-status' },
  { key: 'order-history', label: 'Order History', icon: HistoryIcon, goto: '/order-history' },
  { key: 'settings', label: 'Settings', icon: GearIcon, goto: '/settings' },
];

export default function SidebarLoggedIn({
  isOpen = false,
  user,
  onClose,
  onLogout,
}) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    onLogout?.();
    navigate('/');
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

        <div className="sidebarUser">
          <UserAvatar className="userAvatarIcon" />
          <div>
            <p className="userName">{user?.fullName}</p>
          </div>
        </div>

        <nav className="sidebarNav">
          {MENU_ITEMS.map((item) => (
            <LinkButton
              key={item.key}
              goto={item.goto}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>

        <div className="sidebarFooter">
          <button type="button" className="logoutBtn" onClick={handleLogout}>
            <LogoutIcon className="footerIcon" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}