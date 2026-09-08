import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import "./customization.css";

import Badge from "/src/components/elements/badge/badge";
import BackButton from "/src/components/elements/button/back-button/back-button";
import QuantitySelector from "/src/components/elements/quantity-selector/qty-selector";

import HotIcon from "/src/assets/icons/hot.svg?react";
import IcedIcon from "/src/assets/icons/iced.svg?react";
import CheckIcon from "/src/assets/icons/check.svg?react";

const ADD_ONS = [
    {
        id: "extra-shot",
        name: "Extra Shot",
        price: 30,
    },
    {
        id: "whipped-cream",
        name: "Whipped Cream",
        price: 25,
    },
    {
        id: "oat-milk",
        name: "Oat Milk",
        price: 40,
    },
    {
        id: "vanilla-syrup",
        name: "Vanilla Syrup",
        price: 20,
    },
    {
        id: "caramel-drizzle",
        name: "Caramel Drizzle",
        price: 20,
    },
];

export default function Customization({
    product: productProp = null,
    onClose,
    onAddToOrder,
}) {
    const location = useLocation();
    const navigate = useNavigate();

    const isInline = Boolean(productProp);
    const product = productProp || location.state?.product;

    const [selectedTemperature, setSelectedTemperature] = useState(null);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState("");

    if (!product) {
        return (
            <div className="customization-page">
                <BackButton />

                <p className="customization-not-found">
                    Product not found.
                </p>
            </div>
        );
    }

    const temperatures = Array.isArray(product.temperature)
        ? product.temperature
        : [];

    const hasTemperature = temperatures.length > 0;
    const hasAddOns = ADD_ONS.length > 0;

    const toggleTemperature = (temperature) => {
        setSelectedTemperature((current) =>
            current === temperature ? null : temperature
        );
    };

    const toggleAddOn = (addOnId) => {
        setSelectedAddOns((current) =>
            current.includes(addOnId)
                ? current.filter((id) => id !== addOnId)
                : [...current, addOnId]
        );
    };

    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
        const addOn = ADD_ONS.find(
            (item) => item.id === addOnId
        );

        return total + Number(addOn?.price || 0);
    }, 0);

    const basePrice = Number(product.price || 0);

    const totalPrice =
        (basePrice + addOnsTotal) * quantity;

    const handleAddToOrder = () => {
        const selectedAddOnDetails = ADD_ONS.filter((addOn) =>
            selectedAddOns.includes(addOn.id)
        );

        const existingCart = JSON.parse(
            localStorage.getItem("cartItems") || "[]"
        );

        const newCartItem = {
            id: `cart-item-${Date.now()}`,
            product: {
                id: product.id,
                name: product.name,
                price: basePrice,
                image: product.image,
            },
            temperature: selectedTemperature,
            addOns: selectedAddOnDetails,
            quantity,
            notes: notes.trim(),
            total: totalPrice,
        };

        const updatedCart = [
            ...existingCart,
            newCartItem,
        ];

        localStorage.setItem(
            "cartItems",
            JSON.stringify(updatedCart)
        );

        if (isInline) {
            onAddToOrder?.(
                newCartItem,
                updatedCart
            );
            return;
        }

        navigate("/");
    };

    return (
        <div
            className={`customization-page ${
                isInline ? "inline-customization" : ""
            }`}
        >
            <div className="customization-image">
                <img
                    src={product.image}
                    alt={product.name}
                />

                {!isInline && <BackButton />}

                {isInline && onClose && (
                    <button
                        type="button"
                        className="customization-close"
                        onClick={onClose}
                        aria-label="Close customization"
                    >
                        ×
                    </button>
                )}

                {product.badge &&
                    product.badge !== "soldOut" && (
                        <Badge
                            type={product.badge}
                            className="customization-badge"
                        />
                    )}
            </div>

            <div className="customization-content">
                <div className="customization-product-info">
                    {product.category && (
                        <span className="customization-category">
                            {product.category}
                        </span>
                    )}

                    <h1 className="customization-name">
                        {product.name}
                    </h1>

                    <p className="customization-price">
                        ₱{basePrice.toFixed(2)}
                    </p>

                    {product.description && (
                        <p className="customization-description">
                            {product.description}
                        </p>
                    )}
                </div>

                {hasTemperature && (
                    <section className="customization-section">
                        <h2 className="customization-section-title">
                            Temperature
                        </h2>

                        <div className="temperature-options">
                            {temperatures.includes("hot") && (
                                <button
                                    type="button"
                                    className={`temperature-option temperature-hot ${
                                        selectedTemperature === "hot"
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        toggleTemperature("hot")
                                    }
                                >
                                    <HotIcon className="temperature-icon" />

                                    <span>Hot</span>
                                </button>
                            )}

                            {temperatures.includes("iced") && (
                                <button
                                    type="button"
                                    className={`temperature-option temperature-iced ${
                                        selectedTemperature === "iced"
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        toggleTemperature("iced")
                                    }
                                >
                                    <IcedIcon className="temperature-icon" />

                                    <span>Iced</span>
                                </button>
                            )}
                        </div>
                    </section>
                )}

                {hasAddOns && (
                    <section className="customization-section">
                        <h2 className="customization-section-title">
                            Add-ons
                            <span>Optional</span>
                        </h2>

                        <div className="addon-list">
                            {ADD_ONS.map((addOn) => {
                                const isSelected =
                                    selectedAddOns.includes(
                                        addOn.id
                                    );

                                return (
                                    <button
                                        key={addOn.id}
                                        type="button"
                                        className={`addon-option ${
                                            isSelected
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            toggleAddOn(addOn.id)
                                        }
                                    >
                                        <span className="addon-check">
                                            {isSelected && (
                                                <CheckIcon />
                                            )}
                                        </span>

                                        <span className="addon-name">
                                            {addOn.name}
                                        </span>

                                        <span className="addon-price">
                                            +₱{addOn.price.toFixed(2)}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                )}

                <section className="customization-section quantity-section">
                    <h2 className="customization-section-title">
                        Quantity
                    </h2>

                    <QuantitySelector
                        quantity={quantity}
                        onDecrease={() =>
                            setQuantity((current) =>
                                Math.max(
                                    1,
                                    current - 1
                                )
                            )
                        }
                        onIncrease={() =>
                            setQuantity(
                                (current) =>
                                    current + 1
                            )
                        }
                    />
                </section>

                <section className="customization-section notes-section">
                    <h2 className="customization-section-title">
                        Additional Notes
                    </h2>

                    <textarea
                        className="customization-notes"
                        value={notes}
                        onChange={(event) =>
                            setNotes(
                                event.target.value
                            )
                        }
                        placeholder="Add notes..."
                    />
                </section>

                <button
                    type="button"
                    className="customization-order-button"
                    onClick={handleAddToOrder}
                >
                    <span>Add to Order</span>

                    <span>
                        ₱{totalPrice.toFixed(2)}
                    </span>
                </button>
            </div>
        </div>
    );
}