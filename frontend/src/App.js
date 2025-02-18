import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header'; // Changed import
import Footer from './components/Footer';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp  from "./pages/SignUp";
import Payment from './pages/Payment';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} /> {/* Changed to use HeaderComponent */}
      </Routes>
      <div className='min-h-[calc(100vh-120px)]'>
      <main>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
      <main>
        <Routes>
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <main>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        
      </main>
      <main>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        
      </main>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      </div>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;