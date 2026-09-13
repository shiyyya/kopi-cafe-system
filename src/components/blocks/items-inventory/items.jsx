function Item_Inventory({
    item,
    isEditing,
    onAdjust,
    onIncrease,
    onDecrease,
    onApply
    
}) {
    return (
        <div className="ItemInventory">
            <span>{item.purchaseDate}</span>
            <span>{item.name}</span>

            <span className="InventoryQuantity">
                {isEditing && (
                    <button
                        className="QuantityButton"
                        onClick={onDecrease}
                    >
                        −
                    </button>
                )}

                <span>{item.quantity}</span>

                {isEditing && (
                    <button
                        className="QuantityButton"
                        onClick={onIncrease}
                    >
                        +
                    </button>
                )}
            </span>

            <span>{item.unit}</span>
            <span>{item.expirationDate}</span>
        </div>
    );
}

export default Item_Inventory;