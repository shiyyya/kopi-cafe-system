import Button from "/src/components/elements/button/button";

import OrderItem from "/src/components/blocks/order-item/order-item";

import "./cart.css";

function Cart({ cartItems = [], onClose, onRemove, onPlaceOrder }) {
    const subtotal = cartItems.reduce(
        (total, item) => {
            const productPrice = Number(item.product.price) || 0;

            const addOnsPrice =
                item.addOns?.reduce(
                    (addOnTotal, addOn) =>
                        addOnTotal + (Number(addOn.price) || 0),
                    0
                ) || 0;

            return (
                total +
                (productPrice + addOnsPrice) * item.quantity
            );
        },
        0
    );

    return (
        <div
            className="cartOverlay"
            onClick={onClose}
        >
            <div
                className="CartCard"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="CartHeader">
                    <h2>Your Order</h2>

                    <button
                        type="button"
                        className="CartCloseButton"
                        onClick={onClose}
                        aria-label="Close cart"
                    >
                        ×
                    </button>
                </div>

                <div className="CartItems">
                    {cartItems.map((item) => (
                        <OrderItem
                            key={item.id}
                            item={item}
                            showRemove={true}
                            onRemove={() => onRemove?.(item.id)}
                        />
                    ))}
                </div>

                <div className="CartSubtotal">
                    <span>Subtotal</span>

                    <span>
                        ₱{subtotal.toFixed(2)}
                    </span>
                </div>

                <Button
                    type="button"
                    className="CartPlaceOrder"
                    onClick={onPlaceOrder}
                >
                    Place Order
                </Button>
            </div>
        </div>
    );
}

export default Cart;