import "./Login.css";
import { Link, useNavigate } from "react-router";
import Input from "/src/components/elements/input/input.jsx";
import Button from "/src/components/elements/button/button.jsx";

function LogIn() {
    const navigate = useNavigate();

    return (
        <div className="LoginPage">
            <div className="UserLogin">
                <div className="LoginLogo">
                    <span className="LogoText">Kopi Express</span>
                </div>

                <h1>Welcome Back</h1>

                <p className="LoginDescription">
                    Log in to place your order.
                </p>

                <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="LoginInput"
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="LoginInput"
                />

                <Button
                    type="button"
                    className="LoginButton"
                    onClick={() => navigate("/")}
                >
                    Log In
                </Button>

                <p className="SignUpText">
                    No account?{" "}
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LogIn;