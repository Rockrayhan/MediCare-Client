import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import './login2.css'

const Login2 = () => {

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://polar-thicket-76869.herokuapp.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            alert('Login Successfull.....!')
			window.location = "/";
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
        <div className='login_form_container row'>
            <div className='login-left col-lg-8'>
                <form className='' onSubmit={handleSubmit}>
                    <h1>Login to Your Account</h1>
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

                    {error && <div className='error_msg'>{error}</div>}
                    <button type="submit" className="green_btn">
                        Sing In
                    </button>
                </form>
            </div>
            <div className='login-right col-lg-4'>
                <h1>New Here ?</h1>
                <Link to="/signup2">
                    <button type="button" className='white_btn'>
                        Sing Up
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Login2;