import React from 'react';
import Header from '../Header/Header';
import department1 from '../Department/emergency.jpg';
import department6 from '../Department/ent-surgery.jpg';
import department2 from '../Department/general-surgery.jpg';
import department3 from '../Department/gynecology.jpg';
import department4 from '../Department/indoor-department.jpg';
import department5 from '../Department/medicine.jpg';
import Footer from '../Footer/Footer';


const Department = () => {
    return (
        <div>
            <Header> </Header>
            <div className="container">
            <h1 className="mt-5 mb-2 text-primary">Our  Departments </h1>
            
             
             <div className="row mb-5 mt-5">
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={department1} alt="" />
                     <h3>Emergency</h3>
                     
                 </div>
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={department2} alt="" />
                     <h3> general-surgery</h3>
                     
                 </div>
                
             </div>
             <div className="row mt-5">
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={department3} alt="" />
                     <h3>gynecology</h3>
                     
                 </div>
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={department4} alt="" />
                     <h3>indoor-department</h3>
                     
                 </div>
                
             </div>
             <div className="row mt-5">
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={department5} alt="" />
                     <h3>medicine</h3>
                     
                 </div>
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={department6} alt="" />
                     <h3>ENT-surgery</h3>
                  
                 </div>
                
             </div>

            <Footer></Footer>
            </div>
            </div>
       
    );
};

export default Department;