import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header'; // Changed import
import Footer from '../components/Footer';

const ForgotPassword = () => {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Header />} /> {/* Changed to use HeaderComponent */}
    </Routes>    
        
        ForgotPassword

<Routes>
      <Route path="/" element={<Footer />} />
    </Routes>
    </div>
    
  );
}

export default ForgotPassword;
