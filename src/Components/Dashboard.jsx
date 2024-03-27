import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('https://reset-password-app-1.onrender.com/auth/verify')
      .then(res => {
        if (res.data.success) {

        } else {
          navigate('/home');
        }
        console.log(res);

      })

  }, []);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard