import React, { useState } from 'react';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
 
    const [password, setPassword] = useState('');

    const {token} = useParams();

    const navigate = useNavigate();

    const data = {
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://reset-password-app-1.onrender.com/auth/resetpassword/"+token, data)
        .then(response => {
            console.log(response);
            if(response.data.success){
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' id='signupform' onSubmit={handleSubmit}>
                <h2>Reset Password</h2>

                <div className='mb-3'>
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        placeholder='*********'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Reset</button>
            </form>

        </div>
    )
}

export default ResetPassword