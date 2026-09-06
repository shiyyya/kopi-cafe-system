import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./home.css";
import HomeHeader from "/src/components/layout/home-header/home-header.jsx";
import SidebarLoggedIn from "/src/components/blocks/sidebar/sidebar-logged-in.jsx";
import SidebarLoggedOut from "/src/components/blocks/sidebar/sidebar-logged-out.jsx";
import FeaturedCarousel from "/src/components/blocks/featured-carousel/featured-carousel.jsx";
import OrderType from "/src/components/blocks/order-type/order-type.jsx";
import MenuSection from "/src/components/blocks/menu-section/menu-section.jsx";
import DeliveryEligibility from "/src/components/cards/delivery-eligibility/delivery-eligibility.jsx";
import LoginCard from "/src/components/cards/login/login.jsx";
import SignUpCard from "/src/components/cards/signup/signup.jsx";
import Cart from "/src/components/cards/cart/cart.jsx";
import Footer from "/src/components/blocks/footer/footer.jsx";
import products from "/src/data/products";
export default function Home() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [orderType, setOrderType] = useState(null);
    const [deliveryEligibilityOpen, setDeliveryEligibilityOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const featuredProducts = products;
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem("currentUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [pendingProduct, setPendingProduct] = useState(null);
    useEffect(() => {
        const savedCart = JSON.parse(
            localStorage.getItem("cartItems") || "[]"
        );
        setCartItems(savedCart);
    }, []);
    useEffect(() => {
        if (window.location.hash === "#menu") {
            setTimeout(() => {
                document.getElementById("menu")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 0);
        }
    }, []);
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const handleFeaturedOrder = (product) => {
        if (!currentUser) {
            setPendingProduct(product);
            setLoginOpen(true);
            return;
        }
        navigate("/customization", {
            state: {
                product,
            },
        });
    };
    const handleNavigate = (key) => {
        setSidebarOpen(false);
        console.log("Navigate to:", key);
    };
    const handleLogin = () => {
        setSidebarOpen(false);
        setLoginOpen(true);
    };
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        setSidebarOpen(false);
    };
    const goToCart = () => {
        setCartOpen(true);
    };
    const goToProfile = () => {
        console.log("Go to profile");
    };
    const handleOrderType = (type) => {
        setOrderType(type);
        console.log("Order type:", type);
    };
    const handleRemoveFromCart = (itemId) => {
        setCartItems((currentItems) => {
            const updatedItems = currentItems.filter(
                (item) => item.id !== itemId
            );
            localStorage.setItem(
                "cartItems",
                JSON.stringify(updatedItems)
            );
            return updatedItems;
        });
    };
    return (
        <div className="homePage">
            <HomeHeader
                currentUser={currentUser}
                onLogin={handleLogin}
                onCartClick={goToCart}
                onProfileClick={goToProfile}
                onMenuClick={() => setSidebarOpen(true)}
                cartCount={cartCount}
            />
            <FeaturedCarousel
                products={featuredProducts}
                onOrderNow={handleFeaturedOrder}
            />
            <OrderType
                selectedType={orderType}
                onSelect={handleOrderType}
                onCheckDelivery={() =>
                    setDeliveryEligibilityOpen(true)
                }
            />
            <div id="menu">
                <MenuSection
                    onLoginRequired={handleFeaturedOrder}
                />
            </div>
            {currentUser ? (
                <SidebarLoggedIn
                    isOpen={sidebarOpen}
                    user={currentUser}
                    onClose={() => setSidebarOpen(false)}
                    onNavigate={handleNavigate}
                    onLogout={handleLogout}
                />
            ) : (
                <SidebarLoggedOut
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    onNavigate={handleNavigate}
                    onLogin={handleLogin}
                />
            )}
            {deliveryEligibilityOpen && (
                <div
                    className="delivery-eligibility-overlay"
                    onClick={() =>
                        setDeliveryEligibilityOpen(false)
                    }
                >
                    <div
                        className="delivery-eligibility-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <DeliveryEligibility />
                    </div>
                </div>
            )}
            {loginOpen && (
                <LoginCard
                    onClose={() => setLoginOpen(false)}
                    onSignUp={() => {
                        setLoginOpen(false);
                        setSignUpOpen(true);
                    }}
                    onLoginSuccess={(user) => {
                        setCurrentUser(user);
                    }}
                />
            )}
            {signUpOpen && (
                <SignUpCard
                    onClose={() => setSignUpOpen(false)}
                    onLogin={() => {
                        setSignUpOpen(false);
                        setLoginOpen(true);
                    }}
                />
            )}
            {cartOpen && (
                <Cart
                    cartItems={cartItems}
                    onClose={() => setCartOpen(false)}
                    onRemove={handleRemoveFromCart}
                    onPlaceOrder={() => {
                        navigate("/place-order", {
                            state: {
                                items: cartItems,
                            },
                        });
                        setCartOpen(false);
                    }}
                />
            )}
            <Footer />
        </div>
    );
}