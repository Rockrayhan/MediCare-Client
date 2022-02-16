import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    const sumbitConfirm =() => {
        window.location.reload();
        alert('Your message has Sent....!!');
        
    }
    return (
        <div>
            
            <div className="container" >
                <h1 className="mt-5 fw-bold mb-5 text-primary"> Contact us </h1>
                <form >
                    <div class="form-row">
                        <div class="col mb-3">
                            <input type="text" class="form-control" placeholder="First name"/>
                        </div>
                        <div class="col mb-3">
                            <input type="text" class="form-control" placeholder="Last name"/>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control" placeholder="Email" required/>
                        </div>
                    </div>
                </form>

                <p className="mt-5 mb-4">Write your Questions Here !! We will reply as soon as possible.</p>
                <div className="d-flex justify-content-center align-content-center ">


                    <input className="form-control form-control-sm p-4 mb-5" type="text" placeholder="Write your question...." />
                </div>
                <button onClick={sumbitConfirm} className='btn btn-primary'> Submit </button>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;