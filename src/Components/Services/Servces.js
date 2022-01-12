import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css' ;
const Servces = (props) => {
    const {name , img , description ,id} =props.services;
    
    return (
        <div className="services-card">
            <img className="img-fluid service-img" src={img} alt="" />
            <h5> {name} </h5>
            <p className="services-details container"> {description}  </p>
            <Link to={`/seeDetails/${id}`}> 
            <button className="btn btn-info"> Details </button>
            </Link>
        </div>
    );
};

export default Servces;