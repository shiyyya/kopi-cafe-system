import { useState } from "react";
import "./largeheader-wback.css";
import Back from "/src/components/elements/button/back-button/back-button.jsx";
import Button from "/src/components/elements/button/button.jsx";
import Logo from "/src/assets/logo/logo.svg?react";

function LargeHeader({ title }) {
    const [activeTab, setActiveTab] = useState("Walk-In Order Requests");

    const tabs = [
        "Walk-In Order Requests",
        "Online Order Requests",
        "Orders In-Queue",
        "Sales Report",
        "Inventory"
    ];

    return (
        <div className="LargeHeader">
            <div className="headerTop">
                <Back />
                <Logo />
                <h1 className="LargeHeaderTitle">{title}</h1>
            </div>

            <div className="headerTabs">
                {tabs.map((tab) => (
                    <Button
                        key={tab}
                        className={`headerTab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default LargeHeader;