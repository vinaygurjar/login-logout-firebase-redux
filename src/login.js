import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  
import './signup.css';
import firebase from './firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();  

    const submit = async (e) => {
        e.preventDefault();
        try {
            // Firebase sign-in
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pass);

            if (userCredential) {
                alert("Login Successfully");
                navigate('/logout'); 
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div className='main_container_signup'>
                <div className='header'>
                    <h2>Login</h2>
                </div>
                <div className='box'>
                    <input 
                        type='email' 
                        value={email} 
                        placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className='box'>
                    <input 
                        type='password' 
                        value={pass} 
                        placeholder='Password' 
                        onChange={(e) => setPass(e.target.value)} 
                    />
                </div>
                <p>Don't Have an Account? <Link to="/">Create Account</Link></p> 
                
                <button onClick={submit}>Login</button>
            </div>
        </>
    );
};

export default Login;
