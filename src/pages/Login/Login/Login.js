import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import login from '../../../images/login.jpg';

import {
    getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail,
    signInWithEmailAndPassword, sendEmailVerification, updateProfile
} from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must containt 2 upper case.')
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password)
    }


    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(resut => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(resutl => { })
    }
    return (
        <div className="container login my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                        <form onSubmit={handleRegistration}>
                            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>

                            {!isLogin && <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Full Name</label>
                                <div className="col-sm-10">
                                    <input type="text" onBlur={handleNameChange} className="form-control" placeholder="Your Name" />
                                </div>
                            </div>}

                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3 text-danger">{error}</div>
                            <button type="submit" className="btn btn-primary me-3">{isLogin ? 'Login' : 'Register'}</button>
                            <button onClick={handleGoogleLogin} className="btn btn-warning text-center">Google Sign In</button> <br />
                            <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm mt-3 me-3">Reset Password</button>
                            <Link to="/register">New User?</Link>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={login} alt="" />
                </div>
            </div>
        </div>





    );
};

export default Login;