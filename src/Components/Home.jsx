import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleLogout = (e) => {
    axios.get('http://localhost:5000/auth/logout')
      .then(res => {
        if (res.data.success) {
          navigate('/login')
        }
      }).catch(err => {
        console.log(err);
      })
  }


  return (
    <div>Home
      <button className='btn btn-outline-primary'><Link to="/dashboard">Dashboard</Link></button>
      <br /> <br />
      <button className='btn btn-outline-primary' onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Home