import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <form>
                                <h3>Sign Up</h3>

                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>

                                <div className="form-group">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                                <Link to="/login">Already registered ?</Link>
                            </form>


                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;