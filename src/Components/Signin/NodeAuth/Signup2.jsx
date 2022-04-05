import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './signup2.css'
const Signup2 = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const history = useHistory();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://polar-thicket-76869.herokuapp.com/api/users";
            const { data: res } = await axios.post(url, data);
            alert('Registration Completed.....!!')
            history("/login2");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };





    return (
        <div className='container justify-content-center d-flex'>
            <div className='signup_form_container row'>
                <div className='signup-left col-lg-4'>
                    <h1 className='mb-4'>Welcome Back</h1>
                    <Link to="/login2">
                        <button type="button" className="white_btn">
                            Sing in
                        </button>
                    </Link>
                </div>
                <div className='signup-right col-lg-8'>
                    <form className='' onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className='input'
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className='input'
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className='input'
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className='input'
                        />
                        <br />

                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" className='green_btn'>
                            Sing Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup2;