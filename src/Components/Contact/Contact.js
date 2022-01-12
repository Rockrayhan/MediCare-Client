import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div>
            <Header> </Header>
            <div className="container">
                <h1 className="mt-5  mb-5 text-primary"> Contact us </h1>

                <p className="mt-5 mb-4">Write your Questions Here !! We will reply as soon as possible.</p>
                <div className="d-flex justify-content-center align-content-center ">


                    <input className="form-control form-control-sm p-4 mb-5" type="text" placeholder="Write your question...." />
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;