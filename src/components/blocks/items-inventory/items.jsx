function Item_Inventory({ item }) {
    return (
        <div className="ItemInventory">
            <span>{item.purchaseDate}</span>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.unit}</span>
            <span>{item.expirationDate}</span>
        </div>
    );
}

export default Item_Inventory;