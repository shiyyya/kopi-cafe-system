import { useState } from "react";
import "./new-menu-form.css";
const categories = [
    "Coffee",
    "Non-Coffee",
    "Pastries",
    "Pasta",
];
function NewMenuForm({ onCancel, onSave }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [temperature, setTemperature] = useState([]);
    const isDrink =
        category === "Coffee" || category === "Non-Coffee";
    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setCategory(value);
        if (value !== "Coffee" && value !== "Non-Coffee") {
            setTemperature([]);
        }
    };
    const handleTemperature = (value) => {
        setTemperature((current) =>
            current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value]
        );
    };
    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setImage(file);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name.trim() || !price || !category) {
            return;
        }
        const newProduct = {
            id: `product-${Date.now()}`,
            name: name.trim(),
            category,
            price: Number(price),
            description: description.trim(),
            image,
            badge: null,
            temperature: isDrink ? temperature : [],
        };
        onSave?.(newProduct);
    };
    return (
        <form className="NewMenuForm" onSubmit={handleSubmit}>
            <div className="NewMenuFormHeader">
                <div>
                    <h2>New Menu</h2>
                    <p>Create a new menu item.</p>
                </div>
                <button
                    type="button"
                    className="NewMenuFormClose"
                    onClick={onCancel}
                    aria-label="Close"
                >
                    ×
                </button>
            </div>
            <div className="NewMenuFormContent">
                <div className="NewMenuField">
                    <label>Product Image</label>
                    <label
                        className="NewMenuImageUpload"
                        htmlFor="menu-image"
                    >
                        {image ? (
                            <span>{image.name}</span>
                        ) : (
                            <>
                                <strong>+ Upload Image</strong>
                                <span>Choose a product image</span>
                            </>
                        )}
                    </label>
                    <input
                        id="menu-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="NewMenuField">
                    <label htmlFor="menu-name">Product Name</label>
                    <input
                        id="menu-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter product name"
                    />
                </div>
                <div className="NewMenuField">
                    <label htmlFor="menu-description">
                        Description
                    </label>
                    <textarea
                        id="menu-description"
                        value={description}
                        onChange={(event) =>
                            setDescription(event.target.value)
                        }
                        placeholder="Enter product description"
                    />
                </div>
                <div className="NewMenuFormRow">
                    <div className="NewMenuField">
                        <label htmlFor="menu-price">Price</label>
                        <div className="NewMenuPriceInput">
                            <span>₱</span>
                            <input
                                id="menu-price"
                                type="number"
                                min="0"
                                step="0.01"
                                value={price}
                                onChange={(event) =>
                                    setPrice(event.target.value)
                                }
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                    <div className="NewMenuField">
                        <label htmlFor="menu-category">
                            Category
                        </label>
                        <select
                            id="menu-category"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <option value="">
                                Select category
                            </option>
                            {categories.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {isDrink && (
                    <div className="NewMenuField">
                        <label>Temperature</label>
                        <div className="NewMenuTemperature">
                            <button
                                type="button"
                                className={
                                    temperature.includes("hot")
                                        ? "selected"
                                        : ""
                                }
                                onClick={() =>
                                    handleTemperature("hot")
                                }
                            >
                                Hot
                            </button>
                            <button
                                type="button"
                                className={
                                    temperature.includes("iced")
                                        ? "selected"
                                        : ""
                                }
                                onClick={() =>
                                    handleTemperature("iced")
                                }
                            >
                                Iced
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="NewMenuFormActions">
                <button
                    type="button"
                    className="NewMenuCancelButton"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="NewMenuSaveButton"
                >
                    Save Menu
                </button>
            </div>
        </form>
    );
}
export default NewMenuForm;