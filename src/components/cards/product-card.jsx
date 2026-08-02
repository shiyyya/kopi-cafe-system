import './product-card.css';

function ProductCard({
    image,
    name,
    category,
    price,
    onClick,
    className = "",
}) {
    return (
        <div
            className={`product-card ${className}`}
            onClick={onClick}
        >
            <img
                className="product-card-image"
                src={image}
                alt={name}
            />

            <div className="product-card-content">
                <h3 className="product-card-name">
                    {name}
                </h3>

                <p className="product-card-category">
                    {category}
                </p>

                <p className="product-card-price">
                    ₱{price}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;