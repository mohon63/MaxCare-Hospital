import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-dark text-white">
            <div className="container-fluid text-md-left">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Maxcare Hospital</h5>
                        <p>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality..</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Action</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Services</a></li>
                            <li><a href="#!">Feedback</a></li>
                            <li><a href="#!">Make Appointment</a></li>
                            <li><a href="#!">Contact</a></li>
                            <li><a href="#!">Immunization (Vaccination)</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Corporate</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Management Team</a></li>
                            <li><a href="#!">Investor Relations</a></li>
                            <li><a href="#!">Corporate Information</a></li>
                            <li><a href="#!">Newsroom</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Self Information</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Corporate Governance</a></li>
                            <li><a href="#!">Information Request</a></li>
                            <li><a href="#!">Investor Kits</a></li>
                            <li><a href="#!">Food & Beverage</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                <a href="https://www.facebook.com/softwebsolution1"> SoftWeb Solution</a>
            </div>

        </footer>
    );
};

export default Footer;
