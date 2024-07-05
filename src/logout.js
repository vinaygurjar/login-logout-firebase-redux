import React from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebaseConfig'
import './signup.css'

const Logout = () => {
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            alert("Logged out successfully");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };
  return (
    <>
    <div className='main_container_signup'>
        <div className='header'>
            <h2>Logout</h2>
        </div>
        <button onClick={handleLogout}><Link to="/">Logout</Link></button>
        <p>Go back to <Link to="/login">Login</Link> page</p>
    </div>
    </>
  )
}

export default Logout