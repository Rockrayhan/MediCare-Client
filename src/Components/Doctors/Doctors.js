import React from 'react';

import doctor1 from '../Doctors/doctor1.png';
import doctor2 from '../Doctors/doctor2.png';
import doctor3 from '../Doctors/doctor3.png';
import doctor4 from '../Doctors/doctor4.png';
import Footer from '../Footer/Footer';

const Doctors = () => {
    return (
        <div>
            
            <div className="container">
            <h1 className="mt-5 mb-2"> Experienced Doctors </h1>
            <h5>Here are some world class popularly recomended doctors </h5>
             
             <div className="row mb-5 mt-5">
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={doctor1} alt="" />
                     <h3>Dr. Adam Billiard</h3>
                     <h5>Heart Specialist</h5>
                 </div>
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={doctor2} alt="" />
                     <h3>Dr. Ashley Roxy</h3>
                     <h5>Dentist Specialist</h5>
                 </div>
                
             </div>
             <div className="row mt-5">
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={doctor3} alt="" />
                     <h3>Dr. Alex Moxly</h3>
                     <h5>Medicine Specialist</h5>
                 </div>
                 <div className="col-lg-6">
                     <img className="img-fluid rounded" src={doctor4} alt="" />
                     <h3>Dr. Justin Stuard</h3>
                     <h5>Homeo Specialist</h5>
                 </div>
                
             </div>

            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Doctors;