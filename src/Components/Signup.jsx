import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const data = {
        username: username,
        email: email,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/auth/signup', data).then(response => {
            console.log(response);
            if (response.data.success) {
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' id='signupform' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className='mb-3'>
                    <label htmlFor="username">UserName:</label>
                    <input
                        type="text"
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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

                <button type='submit' className='btn btn-outline-primary'>Sign Up</button>
                <p>Have an Account?<Link to="/login">Login</Link></p>
            </form>

        </div>
    )
}
