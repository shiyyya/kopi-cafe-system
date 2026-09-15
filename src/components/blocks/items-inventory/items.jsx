function Item_Inventory({
    item,
    isEditing,
    adjustment,
    onAdjustmentChange,
    onIncrease,
    onDecrease,
    onApply
}) {
    return (
        <div className="ItemInventory">
            <span>{item.purchaseDate}</span>
            <span>{item.name}</span>

            <div className="InventoryQuantity">
                {isEditing ? (
                    <div className="QuantityEditor">
                        <div className="CurrentQuantity">
                            <span className="QuantityLabel">
                                Current Quantity
                            </span>
                            <span className="QuantityValue">
                                {item.quantity}
                            </span>
                        </div>

                        <div className="AdjustQuantity">
                            <span className="QuantityLabel">
                                Adjust by
                            </span>

                            <input
                                className="QuantityInput"
                                type="number"
                                min="0"
                                value={adjustment}
                                placeholder="0"
                                onChange={(e) =>
                                    onAdjustmentChange(e.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="QuantityButton"
                                onClick={onDecrease}
                            >
                                −
                            </button>

                            <button
                                type="button"
                                className="QuantityButton"
                                onClick={onIncrease}
                            >
                                +
                            </button>

                            <button
                                type="button"
                                className="ApplyButton"
                                onClick={onApply}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                ) : (
                    <span className="NormalQuantity">
                        {item.quantity}
                    </span>
                )}
            </div>

            <span>{item.unit}</span>
            <span>{item.expirationDate}</span>
        </div>
    );
}

export default Item_Inventory;