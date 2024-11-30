import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig"; 
import firebase from "firebase/compat/app";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!firstName || !lastName || !username || !email || !mobile || !zipCode || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Save user details in Firestore
      await db.collection("users").doc(user.uid).set({
        firstName,
        lastName,
        username,
        email,
        mobile,
        zipCode,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      alert("Account Created Successfully and Data Stored!");
      navigate('/login');  

    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="main_container_signup">
      <div className="header">
        <h2>Registration</h2>
      </div>
      <form onSubmit={submit}>
        <div className="box">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="tel"
            value={mobile}
            placeholder="Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={zipCode}
            placeholder="Zip Code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p>
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
