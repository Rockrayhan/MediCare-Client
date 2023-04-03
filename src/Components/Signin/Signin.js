import React from 'react';
import useAuth from '../../Hooks/useAuth';
import login_bg from '../../images/login_bg.jpg' ;

const bannerStyle = {
    backgroundImage: `url(${login_bg})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:'100%',       
}


const Signin = () => {
    const {googleSignIn} = useAuth() ;
    return (
        <div className='' style={bannerStyle}>
            
            
            {/* <div style={{width:'40%'}} className="container">
            <h2 className="mt-5 mb-4">Please Login</h2>
            <form>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
            </form>
            <button className="btn btn-success">Log in</button>
            </div> */}


                <button onClick={googleSignIn} className="btn btn-primary ms-4">Google Sign In</button>
            
               
                
        </div>
    );
};

export default Signin;