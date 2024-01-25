import React from 'react';
import useAuth from '../../Hooks/useAuth';
import login_1 from '../../images/login1.jpg';
import google_logo from '../../images/google.png';
import './Signin.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const bannerStyle = {
    backgroundImage: `url(${login_1})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
}


const Signin = () => {
    const { googleSignIn, user } = useAuth();
    
    return (
        <div className='' style={bannerStyle}>

            <div className='d-flex justify-content-center align-items-center' >
                  { user ? 
                  <div> <h1 className='mt-5'>You Are Logged In  {user.displayName} </h1> </div> 
                  :  
                  
                <Card className='login-card p-4' style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title className='fw-bold'>Please Sign In with Google</Card.Title>
                  <br />
                  <Button className='mt-5' onClick={googleSignIn} variant="primary"> <img className='img-fluid goole-img' src={google_logo} alt="" /> Google Sign In</Button>

                  
              </Card.Body>
                </Card>
                  
                  }
            </div>
        </div>
    );
};

export default Signin;