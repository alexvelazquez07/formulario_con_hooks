import React, { useState } from "react";
const Formulario = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const createUser = (e) => {
    e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    const handleName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
        setNameError("First Name must be at least 2 characters.");
    } else {
        setNameError("");
    }
    };
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
        setLastNameError("Last Name must be at least 2 characters.");
    } else {
        setLastNameError("");
    }
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
        setEmailError("Email must be at least 5 characters.");
        } else {
        setEmailError("");
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 5) {
        setPasswordError("Password must be at least 5 characters.");
        } else {
        setPasswordError("");
        }
    };
    const handleConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        if (e.target.value.length < 5) {
        setConfirmPasswordError("Password must be at least 5 characters.");
        } else {
        setConfirmPasswordError("");
        }
    };
    return (
    <form onSubmit={createUser}>
        <div>
            <label>First Name: </label>
            <input type="text" onChange={handleName} />
            {nameError ? <p>{nameError}</p> : ""}
        </div>
        <div>
            <label>Last Name: </label>
            <input type="text" onChange={handleLastName} />
            {LastNameError ? <p>{LastNameError}</p> : ""}
        </div>
        <div>
            <label>Email: </label>
            <input type="text" onChange={handleEmail} />
            {emailError ? <p>{emailError}</p> : ""}
        </div>
        <div>
            <label>Password: </label>
            <input type="Password" onChange={handlePassword} />
            {passwordError ? <p>{passwordError}</p> : ""}
        </div>
        <div>
            <label> Confirm Password: </label>
            <input type="password" onChange={handleConfirmPassword} />
            {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
            {password === confirmpassword ? "" : <p>Password must match</p>}
        </div>
        <input type="submit" value="Create User" />
            <p>First Name:{firstname}</p>
            <p>Last Name:{lastname}</p>
            <p>Email:{email}</p>
            <p>Password: password</p>
            <p>confirm password: Password</p>
    </form>
    );
};
export default Formulario;
