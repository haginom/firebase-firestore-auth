import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { auth, db } from "./Firebase/Firebase";
import { collection, addDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import View from "./View";
import styled from "styled-components";
const StyledError = styled.div`
color: red;
padding: 1rem;
border: red solid 3px;
margin-bottom: 1rem;
`

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };
  
  const docRef = async (db, name, email) => {
    await addDoc(collection(db, "users"), {
      name: {name},
      email: {email}
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      if (validatePassword()) {
        await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(auth.currentUser)
        await docRef(db, name, email)
        console.log("Document written with ID: ", docRef);
        navigate(`/app/profile`);
      }
    } catch (err) {
      setError(err.message);
      console.log(err.message)
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <View title="Register">
      <div className="register">
        <div className="register__container">
          {error && <StyledError className="auth__error">Looks like there is already a user with that email address, please <Link to="/app/login">log in!</Link></StyledError>}
          <form onSubmit={handleSubmit}>
            <input
                type="name"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button>Register</button>
          </form>
          <div>
            <Link to="/app/reset">Forgot Password</Link>
          </div>
          <div>
            Already have an account? <Link to="/app/login">Login</Link> now.
          </div>
        </div>
      </div>
    </View>
  );
};

export default Register;