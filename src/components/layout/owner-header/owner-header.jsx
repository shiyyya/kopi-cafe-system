import "/src/components/largeheader-wback/largeheader-wback.css";
import { useNavigate, useLocation } from "react-router";
import Button from "/src/components/elements/button/button.jsx";
import Logo from "/src/assets/logo/logo.svg?react";

const TABS = [
    { label: "Menu", path: "/owner/menu" },
    { label: "Sales Report", path: "/owner/sales-report" },
    { label: "Inventory", path: "/owner/inventory" },
];

function OwnerHeader({ title = "Kopi Express" }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="LargeHeader">
            <div className="headerTop">
                <Logo />
                <h1 className="LargeHeaderTitle">{title}</h1>
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

export default OwnerHeader;