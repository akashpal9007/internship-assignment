import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <>
    <div className='home'>
        <h1>Abstract Gradient LandingPage Template</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='div-btn'>
        <button className='jbtn'><Link to="/joinnow">JOIN NOW</Link></button>
      </div>
    </>
  )
}

export default Home