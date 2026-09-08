import { useEffect, useState } from "react";
import "./walk-in.css";

import LargeHeader from "../../../components/largeheader-wback/largeheader-wback";
import Button from "../../../components/elements/button/button";
import MenuSection from "../../../components/blocks/menu-section/menu-section";
import Customization from "../../../customer/pages/customization/customization";
function Walkin_Customer() {
    const [orderItems, setOrderItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const savedItems = JSON.parse(
            localStorage.getItem("cartItems") || "[]"
        );

        setOrderItems(savedItems);
    }, []);

    const subtotal = orderItems.reduce(
        (total, item) => total + Number(item.total || 0),
        0
    );

    const handleAddToOrder = (product) => {
        setSelectedProduct(product);
    };

    const handleCustomizationAdd = (newItem, updatedCart) => {
        setOrderItems(updatedCart);
        setSelectedProduct(null);
    };

    const handleCloseCustomization = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="WalkinCustomer">

            <LargeHeader title="Kopi Express/Staff" />

            <div className="Walkin">

                <MenuSection
                    onAddToOrder={handleAddToOrder}
                />

                <div className="Order_Cards">

                    {selectedProduct ? (

                        <Customization
                            key={selectedProduct.id}
                            product={selectedProduct}
                            onClose={handleCloseCustomization}
                            onAddToOrder={handleCustomizationAdd}
                        />

                    ) : (

                        <>

                            <h2>
                                Customer Order
                            </h2>

                            {orderItems.length === 0 ? (

                                <div className="emptyOrder">

                                    <p>
                                        No items in the order.
                                    </p>

                                </div>

                            ) : (

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
                                                        {item.temperature === "hot"
                                                            ? "Hot"
                                                            : "Iced"}
                                                    </span>

                                                )}

                                                {item.addOns?.length > 0 && (

                                                    <span>
                                                        Add-ons:{" "}
                                                        {item.addOns
                                                            .map(
                                                                (addOn) =>
                                                                    addOn.name
                                                            )
                                                            .join(", ")}
                                                    </span>

                                                )}

                                                {item.notes && (

                                                    <span>
                                                        Notes: {item.notes}
                                                    </span>

                                                )}

                                            </div>

                                            <div className="orderItemRight">

                                                <span className="orderItemQuantity">
                                                    × {item.quantity}
                                                </span>

                                                <strong>
                                                    ₱
                                                    {Number(
                                                        item.total
                                                    ).toFixed(2)}
                                                </strong>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                            <div className="orderfooter">

                                <div className="subtotal">

                                    <span>
                                        Subtotal
                                    </span>

                                    <strong>
                                        ₱{subtotal.toFixed(2)}
                                    </strong>

                                </div>

                                <Button
                                    className="placeOrder"
                                    disabled={orderItems.length === 0}
                                >
                                    Place Order
                                </Button>

                            </div>

                        </>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Walkin_Customer;