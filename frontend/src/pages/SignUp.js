import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading animation
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        course: course.title, // Include the course name
      });

      if (response.status === 200) {
        setPopupMessage('Subscription successful!');
      } else {
        setPopupMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setPopupMessage('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
      setIsPopupVisible(true); // Show the popup after the request is finished
    }
  };

  if (!course) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl text-red-500">Error: Course not found!</h2>
        <p>Please navigate from a valid course to subscribe.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">{course.title}</h1>

        {isPopupVisible && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{popupMessage}</h4>
              <button
                onClick={() => setIsPopupVisible(false)} // Hide the popup
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={course.title}
            disabled
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
