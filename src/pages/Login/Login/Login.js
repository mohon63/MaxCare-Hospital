import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
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
    return (


        <div className="container login">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center login">
                        <h2>Please login</h2>

                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn btn-warning text-center">Google Sign In</button>
                        <Link to="/register">New User?</Link>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>





    );
};

export default Login;