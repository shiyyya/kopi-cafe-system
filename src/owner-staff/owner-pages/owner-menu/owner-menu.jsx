import { useState } from "react";
import SearchBar from "/src/components/blocks/search-bar/search-bar";
import CategoryTabs from "/src/components/blocks/product-tabs/product-tabs";
import ProductCard from "/src/components/cards/product-card/product-card.jsx";
import NewMenuCard from "/src/components/cards/new-menu-card/new-menu-card.jsx";
import NewMenuForm from "/src/components/blocks/new-menu-form/new-menu-form.jsx";
import OwnerHeader from "/src/components/layout/owner-header/owner-header.jsx";
import products from "/src/data/products";
import categories from "/src/data/categories";
import "./owner-menu.css";

export default function OwnerMenu() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [menuItems, setMenuItems] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showNewMenu, setShowNewMenu] = useState(false);

    const filteredProducts = menuItems
        .filter((product) => {
            let matchesCategory = true;
            if (selectedCategory === "Best Seller") {
                matchesCategory = product.badge === "popular";
            } else if (selectedCategory !== "All") {
                matchesCategory = product.category === selectedCategory;
            }
            const matchesSearch = product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (a.badge === "soldOut" && b.badge !== "soldOut") {
                return 1;
            }
            if (b.badge === "soldOut" && a.badge !== "soldOut") {
                return -1;
            }
            return 0;
        });

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setShowNewMenu(false);
    };

    const handleNewMenu = () => {
        setSelectedProduct(null);
        setShowNewMenu(true);
    };

    const handleCancelNewMenu = () => {
        setShowNewMenu(false);
    };

    const handleSaveNewMenu = (newProduct) => {
        setMenuItems((current) => [...current, newProduct]);
        setShowNewMenu(false);
        setSelectedProduct(newProduct);
    };

    return (
        <div className="OwnerMenuPage">
            <OwnerHeader title="Kopi Express / Owner" />
            <div className="OwnerMenu">
                <div className="owner-menu-card">
                    <section className="menu-section">
                        <div className="menu-header">
                            <SearchBar
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                placeholder="Search menu..."
                                className="menu-search"
                            />
                        </div>
                        <CategoryTabs
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                            className="menu-categories"
                        />
                        <div className="product-grid">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                    badge={product.badge}
                                    temperature={product.temperature}
                                    onAddToOrder={() =>
                                        handleProductSelect(product)
                                    }
                                />
                            ))}
                            <NewMenuCard onClick={handleNewMenu} />
                        </div>
                        {filteredProducts.length === 0 && (
                            <p className="no-products">
                                No products found.
                            </p>
                        )}
                    </section>
                </div>
                <div className="Owner_Menu_Cards">
                    {showNewMenu ? (
                        <NewMenuForm
                            onCancel={handleCancelNewMenu}
                            onSave={handleSaveNewMenu}
                        />
                    ) : selectedProduct ? (
                        <div className="OwnerMenuDetails">
                            <div className="OwnerMenuDetailsHeader">
                                <div>
                                    <h2>Product Details</h2>
                                    <p>View and manage this menu item.</p>
                                </div>
                                <button
                                    type="button"
                                    className="OwnerMenuDetailsClose"
                                    onClick={() => setSelectedProduct(null)}
                                    aria-label="Close"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="OwnerMenuDetailsImage">
                                {selectedProduct.image ? (
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                    />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </div>
                            <div className="OwnerMenuDetailsInfo">
                                <div>
                                    <span className="OwnerMenuDetailsLabel">
                                        Product Name
                                    </span>
                                    <h3>{selectedProduct.name}</h3>
                                </div>
                                <div>
                                    <span className="OwnerMenuDetailsLabel">
                                        Description
                                    </span>
                                    <p>
                                        {selectedProduct.description ||
                                            "No description provided."}
                                    </p>
                                </div>
                                <div className="OwnerMenuDetailsRow">
                                    <div>
                                        <span className="OwnerMenuDetailsLabel">
                                            Price
                                        </span>
                                        <strong>
                                            ₱{selectedProduct.price}
                                        </strong>
                                    </div>
                                    <div>
                                        <span className="OwnerMenuDetailsLabel">
                                            Category
                                        </span>
                                        <span>
                                            {selectedProduct.category}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="OwnerMenuDetailsLabel">
                                        Availability
                                    </span>
                                    <span
                                        className={`OwnerMenuAvailability ${
                                            selectedProduct.available
                                                ? "available"
                                                : "sold-out"
                                        }`}
                                    >
                                        {selectedProduct.available
                                            ? "Available"
                                            : "Sold Out"}
                                    </span>
                                </div>
                                {selectedProduct.temperature?.length > 0 && (
                                    <div>
                                        <span className="OwnerMenuDetailsLabel">
                                            Temperature
                                        </span>
                                        <span className="OwnerMenuTemperature">
                                            {selectedProduct.temperature
                                                .map(
                                                    (item) =>
                                                        item
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                        item.slice(1)
                                                )
                                                .join(" / ")}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="OwnerMenuDetailsActions">
                                <button
                                    type="button"
                                    className="OwnerMenuEditButton"
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="OwnerMenuDeleteButton"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="OwnerMenuEmpty">
                            <h2>Product Details</h2>
                            <p>Select a product to view its details.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}