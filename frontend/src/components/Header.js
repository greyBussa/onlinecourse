import React, { useState } from 'react';
import Logo from './Logo';
import './style.css';
import { GrSearch } from "react-icons/gr";
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Header = () => {
  const [popupMessage, setPopupMessage] = useState(''); // State to manage the popup message

  const handleButtonClick = (action) => {
    if (action === 'subscribe') {
      setPopupMessage('Please click the respective course to subscribe.');
    } else if (action === 'pay') {
      setPopupMessage('Please click the respective course to make payment.');
    }
    
    // Automatically hide the message after 3 seconds
    setTimeout(() => {
      setPopupMessage('');
    }, 3000);
  };

  return (
    <header className='h-16 shadow-md flex items-center bg-white'>
      <div className='h-full container flex items-center mx-auto px-4 justify-between'>
        
        {/* Logo and Link to Home */}
        <div>
          <Link to="/">
            <Logo w={200} h={100} />
          </Link>
        </div>

       

        {/* Subscribe and Pay buttons */}
        <div className='flex items-center gap-5'>
          {/* Subscribe Button */}
          <div>
            <button 
              onClick={() => handleButtonClick('subscribe')} 
              className='px-5 py-2 border border-cyan-600 text-cyan-600 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200'>
              Subscribe
            </button>
          </div>

          {/* Pay for Course Button */}
          <div>
            <button 
              onClick={() => handleButtonClick('pay')} 
              className='px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200'>
              Pay for Course
            </button>
          </div>
        </div>
      </div>

      {/* Centered Popup message */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white font-bold px-6 py-3 rounded-md shadow-lg">
            {popupMessage}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
