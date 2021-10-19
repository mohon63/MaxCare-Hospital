import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mb-5">
            <img className="fluid" src="https://miro.medium.com/max/875/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" /><br />
            <Link to="/"><Button className="btn-primary">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;