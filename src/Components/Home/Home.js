import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import banner1 from '../../banner1.png';
import './Home.css';
import Footer from '../Footer/Footer';
import Servces from '../Services/Servces';
import brief1 from '../../images/brief-1.png';
import brief2 from '../../images/brief-2.png';
import brief3 from '../../images/brief-3.png';
import appointment from '../../images/appointment.jpg';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header> </Header>
            <div className="container">
                {/* =========== Banner part ============  */}


                <div className="row gx-5 mt-5 banner-container">
                    <div className="col-lg-5 mt-5">
                        <h1 className="banner-header">Welcome to <span className="text-primary">MediCare </span></h1>

                        <p className="mt-4">This is one of the best Hospital in town. Healthcare patients have more options than ever before. With so much information available online, these patients no longer feel the need to visit the closest hospital, a medical practice closest to their location, or even healthcare practices with multiple locations in the community. That’s why it’s so important to have a planned, budgeted healthcare marketing plan to reach new and returning patients in your area at the best moment.</p>
                        <a href='#appointment' className="btn btn-primary p-3 mt-2 rounded"> Make Appointment </a>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={banner1} alt="" />
                    </div>
                </div>

        {/* ============ services part ========= */}


                <h1 className='fw-bold mb-5'> Our Services </h1>
                <hr className="hr-width" />
               
                   <div className="row">
                   {
                        services.map(service => <Servces
                            services={service}
                            key={service.id}>

                        </Servces>)
                    }
                   </div>

              


                {/*========= brief info part ========== */}

                <div className="mt-5 mb-5 fw-bold">
                    <h1> Brief information </h1>
                    <hr className="hr-width" />
                </div>
                <div className="brief-info mt-5 row ">
                    <div className="col-lg-4">
                        <img className="brief-img " src={brief1} alt="" />
                        <h3 className="mt-3">Doctors <br />
                            60+</h3>

                    </div>
                    <div className="col-lg-4">
                        <img className="brief-img " src={brief2} alt="" />
                        <h3 className="mt-3">Staffs <br />
                            100+</h3>
                    </div>
                    <div className="col-lg-4">
                        <img className="brief-img" src={brief3} alt="" />
                        <h3 className="mt-3">Services <br />
                            40+</h3>
                    </div>
                </div>

                {/* ============== Appointment part ============ */}
                    <h1 id='appointment'> Make An Appointment  </h1>
                    {/* <hr className="hr-width" /> */}
                <div className="row mt-5 appointment-container">
                    <div className="col-lg-6">
                        <img src={appointment} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <form className="row g-3">
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;