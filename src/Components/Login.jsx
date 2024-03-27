import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const data = {
        email: email,
        password: password
    }

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reset-password-app-1.onrender.com/auth/login', data).then(response => {
            console.log(response);
            if (response.data.success) {
                navigate('/home');
            }
        }).catch(err => {
            console.log(err);
        })

    }



    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' id='signupform' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        autoComplete='off'
                        placeholder='Enter your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='*********'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Login</button>
                <p><Link to="/forgotpassword">ForgotPassword?</Link></p>
                <p>Don't Have Account?<Link to="/">SignUp</Link></p>
            </form>

        </div>
    )
}

export default Login