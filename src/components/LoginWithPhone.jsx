import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import Swal from 'sweetalert2'
// import { loginProviderAsync } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const LoginWithPhone = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("");
    const validatePhoneNumber = (numberPhone, lengthString) => {
        if (!numberPhone) {
            return false;
        }

        const value = numberPhone.replace(/\D/g, "");
        const valueLength = value.length;
        return { isValid: valueLength === lengthString, value };
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, value: validNumber } = validatePhoneNumber(
            phoneNumber,
            10
        );
        console.log(isValid, validNumber);
        if (!isValid) {
            alert("el numero debe tener 10 caracteres");
        }
        generateReCaptcha();
        const recapcthaValue = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+57${validNumber}`, recapcthaValue)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                navigate("/verification");
            })
            .catch((error) => {
                console.log(error);
                // Swal.fire('Upps ', 'intenta de nuevo  ', 'error'

                // )
                // navigate("/intro")

            });
    };
    const generateReCaptcha = () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptch-container",
                {
                    size: "invisible",

                    callback: (response) => {
                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                        // onSignInSubmit();
                        // console.log(response);
                    },
                },
                auth
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signin">
            <h2>SignIn </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Phone number
                    <input
                        type="number"
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        value={phoneNumber}
                        placeholder=" + 57 Ingrese numero de telefono"
                    />
                </label>
                <div id="recaptch-container"> </div>
                <button type="submit"> Sign in</button>
            </form>
        </div>
    );
}

export default LoginWithPhone;
