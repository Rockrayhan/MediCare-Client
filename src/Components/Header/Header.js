import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {
  const {user, logOut} = useAuth() ; 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fw-bold">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">MediCare</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <NavLink className="nav-link active ms-5" aria-current="page" to="/home">Home</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/department">Department</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/about">About us</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/contact">Contact</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/doctors">Doctors</NavLink>
          <NavLink className="nav-link active ms-3" aria-current="page" to="/blogs">Blogs</NavLink>
          <span className="user-name"> {user.displayName} </span>
          
         
         
        
          
        {
          user?.email ? 
          <NavLink className="nav-link active" aria-current="page" to="/signin"><button onClick={logOut} className="btn btn-success">Log out</button></NavLink>

          :

          <NavLink className="nav-link active" aria-current="page" to="/signin"><button className="btn btn-success">Log in</button></NavLink>

         
        }
        

         
        
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;