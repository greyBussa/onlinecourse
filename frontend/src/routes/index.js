import React from 'react';
import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home'; // Import the Home component
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import Payment from '../pages/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <Header /> {/* Display header on all pages */}
            <Home />   {/* Display Home content */}
            <Footer /> {/* Display footer on all pages */}
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,   // Render Subscribe page

      },
      {
        path: "payment",
        element: <Payment />,   // Render payment page

      },
     
    ],
  },
]);

export default router;
