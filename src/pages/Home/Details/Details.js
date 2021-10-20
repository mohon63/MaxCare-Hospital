import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data.find(x => parseInt(x.id) === +serviceId)))
    }, [])
    return (


        <div className="container pt-5">
            <div className="row">
                <h2 className="text-center">{services?.name}</h2>
                <div className="col-md-8">
                    <img src={services?.img} alt="" />
                    <h3>{services?.question}</h3>
                    <p>{services?.description2}</p>
                </div>
                <div className="col-md-4">
                    <h4>Service No {serviceId}</h4>
                    <p>{services?.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;