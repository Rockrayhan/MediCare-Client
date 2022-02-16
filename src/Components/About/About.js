import React from 'react';
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <div>
            
            <div className="container mt-5 mb-5">
                <h1 className="text-primary mb-5"> About us </h1>
                <hr className="hr-width" />
                <div style={{marginTop:'50px',marginBottom:'150px' }}>

                <h3>Our story</h3>
                <p> MediCare Hospital is a destination academic pediatric medical center designed to manage the most complex of diseases. We treat the sickest of patients from across the country and around the world. We build research programs to assure tomorrow’s breakthroughs help children everywhere. And we train the next generation of physicians, scientists and health care professionals. 
                    <br />
                    Trinity Mirror, with an award winning portfolio of newspapers, websites and digital products, is one of the UK’s largest multimedia companies employing over 5000 team members in over sixty locations across the UK.
                    <br />
                    <br />
                    Beyond our walls, we invest in building social equity in our communities, address the social determinants of health, and develop payment models to better serve unique populations of children. Our unparalleled investment in Behavioral Health services and research further cements our role as an ambitious champion for the well-being of children everywhere </p>

                </div>
                
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;