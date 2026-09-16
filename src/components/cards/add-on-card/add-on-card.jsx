import "./add-on-card.css";

function AddOnCard({ addOn, onEdit, onDelete }) {
    return (
        <div className="AddOnCard">
            <div className="AddOnCardInfo">
                <h3>{addOn.name}</h3>
                <span>₱{Number(addOn.price).toFixed(2)}</span>
            </div>
            <div className="AddOnCardActions">
                <button type="button" onClick={() => onEdit?.(addOn)}>
                    Edit
                </button>
                <button type="button" onClick={() => onDelete?.(addOn.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default AddOnCard;