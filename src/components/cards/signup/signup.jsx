import "./signup.css";
import { Link, useNavigate } from "react-router";
import Input from "/src/components/elements/input/input.jsx";
import Button from "/src/components/elements/button/button.jsx";

function SignUpCard() {
    const navigate = useNavigate();

    return (
        <div className="SignUpCard">
            <div className="SignUpHandle"></div>

            <div className="SignUpLogo">
                <span>Kopi Express</span>
            </div>

            <h1>Create Account</h1>

            <p className="SignUpDescription">
                Join us for easy ordering.
            </p>

            <label>Full Name *</label>
            <Input
                type="text"
                name="fullName"
                className="SignUpInput"
            />

            <label>Email *</label>
            <Input
                type="email"
                name="email"
                className="SignUpInput"
            />

            <label>Phone Number *</label>
            <Input
                type="tel"
                name="phone"
                className="SignUpInput"
            />

            <label>Password *</label>
            <Input
                type="password"
                name="password"
                className="SignUpInput"
            />

            <label>Confirm Password *</label>
            <Input
                type="password"
                name="confirmPassword"
                className="SignUpInput"
            />

            <label>Delivery Address (optional)</label>
            <Input
                type="text"
                name="address"
                placeholder="House no., street, barangay, Pandi, Bulacan"
                className="SignUpInput"
            />

            <p className="DeliveryNote">
                Delivery zones: Siling Bata, Poblacion, Bunsuran.
            </p>

            <Button
                type="button"
                className="CreateAccountButton"
                onClick={() => navigate("/")}
            >
                Create Account
            </Button>

            <p className="LoginText">
                Have an account?
                <Link to="/login">Log In</Link>
            </p>
        </div>
    );
}

export default SignUpCard;