import React from 'react';
import './service.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="col-md-4">
            <Card className="my-3 ">
                <Card.Img className="img-hight" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/details/${id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;