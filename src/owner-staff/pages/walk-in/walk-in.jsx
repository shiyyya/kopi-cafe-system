import { useState } from "react";
import "./walk-in.css";

import LargeHeader from "../../../components/largeheader-wback/largeheader-wback";
import Button from "../../../components/elements/button/button";
import StaffMenuSection from "../../menu-section/menu.jsx";
import Customizer from "../../customizer/customizer.jsx";

function Walkin_Customer() {
    const [orderItems, setOrderItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const subtotal = orderItems.reduce(
        (total, item) => total + Number(item.total || 0),
        0
    );

    const handleAddToOrder = (product) => {
        setSelectedProduct(product);
    };

    const handleCustomizationAdd = (newItem) => {
        setOrderItems((current) => [...current, newItem]);
        setSelectedProduct(null);
    };

    const handleCloseCustomization = () => {
        setSelectedProduct(null);
    };

    const handlePlaceOrder = () => {
        setOrderItems([]);
        setSelectedProduct(null);
    };

    return (
        <div className="WalkinCustomer">
            <LargeHeader title="Kopi Express/Staff" />

            <div className="Walkin">

                <StaffMenuSection
                    onAddToOrder={handleAddToOrder}
                />

                <div className="Order_Cards">

                    <h2 className="customer-order-title">
                        Customer Order
                    </h2>

                    <div className="customer-order-card">

                        {selectedProduct ? (
                            <Customizer
                                product={selectedProduct}
                                onClose={handleCloseCustomization}
                                onAddToOrder={handleCustomizationAdd}
                            />
                        ) : orderItems.length === 0 ? (
                            <div className="emptyOrder">
                                <p>No items in the order.</p>
                            </div>
                        ) : (
                            <>
                                <div className="orderItems">
                                    {orderItems.map((item) => (
                                        <div
                                            className="orderItem"
                                            key={item.id}
                                        >
                                            <div className="orderItemInfo">
                                                <strong>
                                                    {item.product.name}
                                                </strong>

                                                {item.temperature && (
                                                    <span>
                                                        {item.temperature}
                                                    </span>
                                                )}

                                                {item.addOns?.length > 0 && (
                                                    <span>
                                                        {item.addOns
                                                            .map((addOn) => addOn.name)
                                                            .join(", ")}
                                                    </span>
                                                )}

                                                {item.notes && (
                                                    <span>
                                                        Note: {item.notes}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="orderItemRight">
                                                <span className="orderItemQuantity">
                                                    ×{item.quantity}
                                                </span>

                                                <strong>
                                                    ₱{Number(item.total).toFixed(2)}
                                                </strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="orderfooter">

                                    <div className="subtotal">
                                        <span>Subtotal</span>

                                        <strong>
                                            ₱{subtotal.toFixed(2)}
                                        </strong>
                                    </div>

                                    <button
                                        type="button"
                                        className="placeOrder"
                                        onClick={handlePlaceOrder}
                                        disabled={orderItems.length === 0}
                                    >
                                        Place Order
                                    </button>

                                </div>
                            </>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Walkin_Customer;