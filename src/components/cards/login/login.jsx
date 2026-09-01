import "./login.css";
import { Link, useNavigate } from "react-router";
import Input from "/src/components/elements/input/input.jsx";
import Button from "/src/components/elements/button/button.jsx";

function LoginCard() {
    const navigate = useNavigate();

    return (
        <div className="LoginCard">
            <div className="LoginHandle"></div>

            <div className="LoginLogo">
                <span>Kopi Express</span>
            </div>

            <h1>Welcome Back</h1>

            <p className="LoginDescription">
                Log in to place your order.
            </p>

            <label>Email *</label>
            <Input
                type="email"
                name="email"
                placeholder="Email address"
                className="LoginInput"
            />

            <label>Password *</label>
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
                No account?
                <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
}

export default LoginCard;