import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const course = location.state?.course; // Get the course data passed from the SignUp page
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    amount: course ? '200000' : '', // You can dynamically set the amount based on the course
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
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/payment', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        course: course.title, // Include the course name
      });

      if (response.status === 200) {
        setPopupMessage('Procceed with Payment!');
        const redirectLink = 'https://payments.azampay.co.tz/?id=4a1484bf-98ed-4ff7-8654-0c45debed931&language=en'; // Modify this link to your desired route
        window.open(redirectLink, '_blank');// Navigate to the link after successful data stored
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
    return <div>Error: Course not found!</div>;
  }

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{course.title}</h1>

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
        
        {/* Amount field with TZS currency */}
        <div className="relative space-x-2">
          <input
            type="text"
            name="amount"
            value={`${formData.amount} Tanzanian shillings`} // Show amount with "TZS"
            onChange={handleInputChange}
            placeholder="Amount"
            className="w-full p-2 border border-gray-300 rounded-md pl-12" // Add left padding for currency symbol
            disabled // Make the amount field read-only
          />
          <span className="absolute left-2 top-2 text-gray-500">TZS</span> {/* Currency symbol */}
        </div>

        <input
          type="text"
          value={course.title}
          disabled
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
        />

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Procceed with Payment
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Payment;
