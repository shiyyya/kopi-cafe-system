import './home-header.css';
import MenuIcon from '/src/assets/icons/burger.svg?react';
import CartIcon from '/src/assets/icons/cart.svg?react';
import AvatarIcon from '/src/assets/icons/avatar.svg?react';
import CrownIcon from '/src/assets/logo/logo.svg?react';

export default function HomeHeader({
  currentUser,
  onLogin,
  onCartClick,
  onProfileClick,
  onMenuClick,
}) {
  return (
    <header className="homeHeader">
      <div className="logo">
        <CrownIcon className="logoIcon" />
        <h1 className="homeTitle">Kopi Express</h1>
      </div>

      <div className="headerActions">
        {currentUser ? (
          <button
            type="button"
            className="avatarBtn"
            onClick={onProfileClick}
            aria-label="Open profile"
          >
            <AvatarIcon className="avatarIcon" />
          </button>
        ) : (
          <button type="button" className="headerLoginBtn" onClick={onLogin}>
            Log In
          </button>
        )}

        <button
          type="button"
          className="cartBtn"
          onClick={onCartClick}
          aria-label="Open cart"
        >
          <CartIcon className="cartIcon" />
        </button>

        <button
          type="button"
          className="menuBtn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <MenuIcon className="menuIcon" />
        </button>
      </div>
    </header>
  );
}