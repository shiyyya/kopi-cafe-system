import "./largeheader-wback.css";
import { useNavigate, useLocation } from "react-router";
import Button from "/src/components/elements/button/button.jsx";
import Logo from "/src/assets/logo/logo.svg?react";

const TABS = [
  { label: "Walk-In Order Requests", path: "/walk-in" },
  { label: "Online Order Requests", path: "/online-orders" },
  { label: "Orders In-Queue", path: "/orders-in-queue" },
  { label: "Sales Report", path: "/sales-report" },
  { label: "Inventory", path: "/inventory" },
];

function LargeHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="LargeHeader">
      <div className="headerTop">
        <Logo />
        <h1 className="LargeHeaderTitle">Kopi Express/Staff</h1>
      </div>

      <div className="headerTabs">
        {TABS.map((tab) => (
          <Button
            key={tab.label}
            className={`headerTab ${location.pathname === tab.path ? "active" : ""}`}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default LargeHeader;
