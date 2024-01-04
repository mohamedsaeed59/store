import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../images/header-logo.png";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      navigate("/");
    }).catch((error) => {
      alert(error);
    })
  }
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      navigate("/");
    }).catch((error) => {
      alert(error);
    })
  }
  return (
    <div className='login'>
        <Link to="/">
            <img className='header-logo' src={logo} alt='logo' />
        </Link>
        <div className='login-container'>
            <h1>Login</h1>
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='login-signInBtn' type='submit' onClick={handleLogin}>Sign In</button>
                <p>By Continuing, you agree to Amazon's conditions</p>
                <button className='login-registerBtn' onClick={handleRegister}>Create new account</button>
            </form>
        </div>
    </div>
  )
}

export default Login;