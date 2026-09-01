import "./place-order.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "/src/components/blocks/header-wback/header-wback.jsx";
import Input from "/src/components/elements/input/input.jsx";
import Button from "/src/components/elements/button/button.jsx";

function PlaceOrder() {
    const navigate = useNavigate();
    const location = useLocation();

    const orderItems = location.state?.items || [];

    const [address, setAddress] = useState(
        location.state?.address || ""
    );

    const [phone, setPhone] = useState(
        location.state?.phone || ""
    );

    const [paymentMethod, setPaymentMethod] = useState(
        location.state?.paymentMethod || ""
    );

    const deliveryFee = Number(
        location.state?.deliveryFee || 0
    );

    const subtotal = orderItems.reduce(
        (total, item) => {
            return (
                total +
                Number(item.price) * Number(item.quantity)
            );
        },
        0
    );

    const total = subtotal + deliveryFee;

    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    const handlePlaceOrder = () => {
        const order = {
            items: orderItems,
            address,
            phone,
            paymentMethod,
            subtotal,
            deliveryFee,
            total,
            createdAt: new Date().toISOString(),
        };

        navigate("/order-status", {
            state: {
                order,
            },
        });
    };

    return (
        <div className="PlaceOrderPage">
            <Header title="Place Order" />

            <main className="PlaceOrderContent">

                <section className="DeliverySection">
                    <div className="SectionHeader">
                        <span>⌖</span>
                        <h2>Delivery Address</h2>
                    </div>

                    <Input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(event) =>
                            setAddress(event.target.value)
                        }
                        placeholder="Enter delivery address"
                        className="PlaceOrderInput"
                    />

                    <Input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(event) =>
                            setPhone(event.target.value)
                        }
                        placeholder="Enter phone number"
                        className="PlaceOrderInput"
                    />
                </section>

                <section className="OrderSummary">
                    <h2>Order Summary</h2>

                    {orderItems.length === 0 ? (
                        <div className="EmptyOrder">
                            <p>No items in your order.</p>
                        </div>
                    ) : (
                        <>
                            <div className="OrderItems">
                                {orderItems.map((item) => (
                                    <div
                                        className="OrderItem"
                                        key={item.id}
                                    >
                                        <div className="ItemImage">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            ) : (
                                                <span>☕</span>
                                            )}
                                        </div>

                                        <div className="ItemDetails">
                                            <strong>
                                                {item.name}
                                            </strong>

                                            {item.variant && (
                                                <span>
                                                    {item.variant}
                                                </span>
                                            )}

                                            <span>
                                                × {item.quantity}
                                            </span>
                                        </div>

                                        <strong className="ItemPrice">
                                            ₱
                                            {(
                                                Number(item.price) *
                                                Number(item.quantity)
                                            ).toFixed(2)}
                                        </strong>
                                    </div>
                                ))}
                            </div>

                            <div className="SummaryDivider"></div>

                            <div className="PriceRow">
                                <span>Subtotal</span>
                                <strong>
                                    ₱{subtotal.toFixed(2)}
                                </strong>
                            </div>

                            <div className="PriceRow">
                                <span>Delivery fee</span>
                                <strong>
                                    ₱{deliveryFee.toFixed(2)}
                                </strong>
                            </div>

                            <div className="TotalRow">
                                <span>Total</span>
                                <strong>
                                    ₱{total.toFixed(2)}
                                </strong>
                            </div>
                        </>
                    )}
                </section>

                <section className="PaymentSection">
                    <h2>Payment Method</h2>

                    <Button
                        type="button"
                        className={
                            paymentMethod === "Cash on Delivery"
                                ? "PaymentOption selected"
                                : "PaymentOption"
                        }
                        onClick={() =>
                            handlePaymentChange(
                                "Cash on Delivery"
                            )
                        }
                    >
                        <span className="PaymentIcon">
                            
                        </span>

                        <span className="PaymentDetails">
                            <strong>
                                Cash on Delivery / Pickup
                            </strong>

                            <small>
                                Pay when you receive your order
                            </small>
                        </span>

                        <span
                            className={
                                paymentMethod ===
                                "Cash on Delivery"
                                    ? "PaymentCheck"
                                    : "PaymentRadio"
                            }
                        >
                            {paymentMethod ===
                                "Cash on Delivery" && "✓"}
                        </span>
                    </Button>

                    <Button
                        type="button"
                        className={
                            paymentMethod === "GCash"
                                ? "PaymentOption selected"
                                : "PaymentOption"
                        }
                        onClick={() =>
                            handlePaymentChange("GCash")
                        }
                    >
                        <span className="PaymentIcon">
                        </span>

                        <span className="PaymentDetails">
                            <strong>GCash QR</strong>

                            <small>
                                Scan and pay via GCash
                            </small>
                        </span>

                        <span
                            className={
                                paymentMethod === "GCash"
                                    ? "PaymentCheck"
                                    : "PaymentRadio"
                            }
                        >
                            {paymentMethod === "GCash" && "✓"}
                        </span>
                    </Button>
                </section>

                <section className="OrderInformation">
                    <p>
                        Order will be processed after confirmation.
                    </p>
                </section>

            </main>

            <div className="PlaceOrderFooter">
                <Button
                    type="button"
                    className="ConfirmOrderButton"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                    {total > 0 &&
                        ` (₱${total.toFixed(2)})`}
                </Button>
            </div>
        </div>
    );
}

export default PlaceOrder;