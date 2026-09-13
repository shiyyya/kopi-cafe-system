// import { useState } from "react";
// import "./largeheader-wback.css";
// import Back from "/src/components/elements/button/back-button/back-button.jsx";
// import Button from "/src/components/elements/button/button.jsx";
// import Logo from "/src/assets/logo/logo.svg?react";

// function LargeHeader({ title }) {
//     const [activeTab, setActiveTab] = useState("Walk-In Order Requests");

//     const tabs = [
//         "Walk-In Order Requests",
//         "Online Order Requests",
//         "Orders In-Queue",
//         "Sales Report",
//         "Inventory"
//     ];

//     return (
//         <div className="LargeHeader">
//             <div className="headerTop">
//                 <Back />
//                 <Logo />
//                 <h1 className="LargeHeaderTitle">{title}</h1>
//             </div>

//             <div className="headerTabs">
//                 {tabs.map((tab) => (
//                     <Button
//                         key={tab}
//                         className={`headerTab ${activeTab === tab ? "active" : ""}`}
//                         onClick={() => setActiveTab(tab)}
//                     >
//                         {tab}
//                     </Button>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default LargeHeader;

import "./largeheader-wback.css";
import { useNavigate, useLocation } from "react-router";
import Back from "/src/components/elements/button/back-button/back-button.jsx";
import Button from "/src/components/elements/button/button.jsx";
import Logo from "/src/assets/logo/logo.svg?react";

const TABS = [
  { label: "Walk-In Order Requests", path: "/walk-in-orders" },
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
        <Back />
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