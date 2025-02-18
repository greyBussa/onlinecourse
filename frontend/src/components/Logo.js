// Logo.js
import React from 'react';
import logoImage from '../assets/Logo/Compucate final logo.png'; // Import the PNG file

const Logo = ({ w, h }) => {
  return (
    <p className='text-2xl font-bold text-cyan-600'>OnlineCourse</p>
    // <img src={logoImage} alt="Logo" width={w} height={h} />
  );
}

export default Logo;
