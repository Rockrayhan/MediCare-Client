import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ServiceDetails = () => {
    const {id} = useParams() ;  
    const [data , setData] = useState([]) ;

    useEffect( ()=>{
        fetch('/servicedata.json')
        .then (res => res.json())
        .then (data => setData(data))
    } , [])

    const filterdata = data.filter(td => td.id == id) 
    console.log(filterdata);
    return (
        <div>
            <Header> </Header>
           <div className="container">
           <h1 className="mt-3 mb-5">Service Details Page </h1>
            <img src={filterdata[0]?.img} alt="" />
            <h3 className="mt-5 mb-5">{filterdata[0]?.name}</h3>
            <h5> {filterdata[0]?.description}</h5>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default ServiceDetails;