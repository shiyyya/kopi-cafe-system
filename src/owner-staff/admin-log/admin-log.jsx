import { useState } from "react";
import { useNavigate } from "react-router";
import "./admin-log.css";
import Input from "/src/components/elements/input/input.jsx";
import Button from "/src/components/elements/button/button.jsx";
import Logo from "/src/assets/logo/logo.svg?react";
import EyeIcon from "/src/assets/icons/eye.svg?react";
import EyeOffIcon from "/src/assets/icons/eye-off.svg?react";
import users from "/src/data/admin.js";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        const currentUser = users.find(
            (admin) =>
                admin.email === email &&
                admin.password === password
        );

        if (!currentUser) {
            setError(
                "Invalid email or password. Please check your credentials."
            );
            return;
        }

        setError("");

        localStorage.setItem(
            "currentUser",
            JSON.stringify(currentUser)
        );

        if (currentUser.role === "admin") {
            navigate("/walk-in");
        } else if (currentUser.role === "owner") {
            navigate("/owner/sales-report");
        }
    };

    return (
        <div className="login-overlay">
            <div
                className="login-card"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="login-handle"></div>

                <div className="login-logo">
                    <Logo />
                    <span>Kopi Express</span>
                </div>

                <h2>Welcome Back</h2>

                <p className="login-description">
                    Log in to manage Kopi Express.
                </p>

                <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="login-input"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setError("");
                    }}
                />

                <div className="login-password-wrapper">
                    <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                            setError("");
                        }}
                    />

                    <button
                        type="button"
                        className="login-password-toggle"
                        onClick={() =>
                            setShowPassword((current) => !current)
                        }
                        aria-label={
                            showPassword
                                ? "Hide password"
                                : "Show password"
                        }
                    >
                        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                    </button>
                </div>

                {error && (
                    <p className="login-error" role="alert">
                        {error}
                    </p>
                )}

                <Button
                    type="button"
                    className="login-button"
                    onClick={handleLogin}
                >
                    Log In
                </Button>
            </div>
        </div>
    );
}

export default AdminLogin;