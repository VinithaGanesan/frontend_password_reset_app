import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const data = {
        email: email,
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reset-password-app-1.onrender.com/auth/forgotpassword', data)
            .then(response => {
                if (response.data.success) {
                    alert("check your email for reset password link")
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err)
            })

    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' id='signupform' onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>

                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        autoComplete='off'
                        placeholder='Enter your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Send</button>
            </form>

        </div>
    )
}


export default ForgotPassword