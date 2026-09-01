import { useState } from "react";
import { useNavigate } from "react-router";
import "./place-order.css";
import Header from "/src/components/blocks/header-wback/header-wback.jsx";
import Input from "/src/components/elements/input/input.jsx";
import Button from "/src/components/elements/button/button.jsx";
import Check from "/src/assets/icons/check.svg?react";
import Phone from "/src/assets/icons/phone.svg?react";
import Location from "/src/assets/icons/location.svg?react";
import Money from "/src/assets/icons/money.svg?react";

function PlaceOrder() {
    const navigate = useNavigate();
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [paymentMethod,setPaymentMethod] = useState("cod");

    const handleContinue = () => {
        if(paymentMethod === "gcash"){
            navigate("/qr-payment");
        }else{
            navigate("/payment-confirmation");
        }
    };

    return (
        <div className="PlaceOrderPage">
            <Header title="Place Order"/>

            <main className="PlaceOrderContent">

                <section className="PlaceOrderCard">
                    <h2>Delivery Address</h2>

                    <div className="AddressInputWrapper">
                        <span className="AddressIcon">
                            <Location />
                        </span>

                        <Input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your delivery address"
                            className="AddressInput"
                        />

                        {address && (
                            <span className="AddressCheck">
                                <Check />
                            </span>
                        )}
                    </div>

                    <button
                        type="button"
                        className="AddAddressButton"
                        onClick={() => navigate("/store-locator")}
                    >
                        <span>＋</span>
                        Add new address
                    </button>

                    <div className="AddressDivider"></div>

                    <div className="PhoneInputWrapper">
                        <Phone />
                        <span className="PhoneIcon"></span>

                        <Input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="09171234567"
                            className="PhoneNumberInput"
                        />
                    </div>
                </section>

                <section className="PlaceOrderCard">
                    <h2>Order Summary</h2>

                    <div className="EmptyOrder">
                        No items in your order yet.
                    </div>
                </section>

                <section className="PlaceOrderCard">
                    <h2>Payment Method</h2>

                    <button
                        type="button"
                        className={`PaymentOption ${paymentMethod === "cod" ? "selected" : ""}`}
                        onClick={() => setPaymentMethod("cod")}
                    >
                        <span className="PaymentIcon">
                            <Money />
                        </span>

                        <span className="PaymentInfo">
                            <strong>Cash on Delivery / Pickup</strong>
                            <span>Pay when you receive your order</span>
                        </span>

                        <span className="PaymentCircle">
                            {paymentMethod === "cod" ? "✓" : ""}
                        </span>
                    </button>

                    <button
                        type="button"
                        className={`PaymentOption ${paymentMethod === "gcash" ? "selected" : ""}`}
                        onClick={() => setPaymentMethod("gcash")}
                    >
                        <span className="PaymentIcon">📱</span>

                        <span className="PaymentInfo">
                            <strong>GCash QR</strong>
                            <span>Scan and pay via GCash</span>
                        </span>

                        <span className="PaymentCircle">
                            {paymentMethod === "gcash" ? "✓" : ""}
                        </span>
                    </button>
                </section>

                <div className="OrderDetails">
                    <p>Order ID: —</p>
                    <p>Receipt sent to your account</p>
                </div>

            </main>

            <div className="PlaceOrderBottom">
                <Button
                    type="button"
                    className="PlaceOrderButton"
                    onClick={handleContinue}
                >
                    {paymentMethod === "gcash"
                        ? "Confirm Payment"
                        : "Continue to Payment"}
                </Button>
            </div>
        </div>
    );
}

export default PlaceOrder;