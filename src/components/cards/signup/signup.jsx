import "./signup.css";

import { Link } from "react-router";

import Input from "/src/components/elements/input/input.jsx";

import Button from "/src/components/elements/button/button.jsx";
import Logo from "/src/assets/logo/logo.svg?react";


function SignUpCard({ onClose, onLogin }) {

    return (

        <div
            className="signUpOverlay"
            onClick={onClose}
        >

            <div
                className="SignUpCard"
                onClick={(event) => event.stopPropagation()}
            >

                <div className="SignUpHandle"></div>

                <div className="SignUpLogo">
                    <Logo/>
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
                    placeholder="Juan Dela Cruz"
                    className="SignUpInput"
                />

                <label>Email *</label>
                <Input
                    type="email"
                    name="email"
                    placeholder="juan@email.com"
                    className="SignUpInput"
                />

                <label>Phone Number *</label>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="09XX-XXX-XXXX"
                    className="SignUpInput"
                />

                <label>Password *</label>
                <Input
                    type="password"
                    name="password"
                    placeholder="••••••"
                    className="SignUpInput"
                />

                <label>Confirm Password *</label>
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••"
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
                >
                    Create Account
                </Button>

                <p className="LoginText">
                    Have an account?
                    <Link
                        to="/login"
                        onClick={(event) => {
                            event.preventDefault();
                            onLogin?.();
                        }}
                    >
                        Log In
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default SignUpCard;