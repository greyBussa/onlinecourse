import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Software Engineering",
    description: "Learn the foundations of software engineering, including algorithms, data structures, and more.",
    image: "https://www.mtu.edu/cs/undergraduate/software/what/images/software-engineering-banner2400.jpg",
    link: "#subscribe-software-engineering",
  },
  {
    title: "Machine Learning",
    description: "Dive into machine learning concepts, from supervised learning to neural networks.",
    image: "https://axenehp.com/wp-content/uploads/2019/02/20190225_header.jpg",
    link: "#subscribe-machine-learning",
  },
  {
    title: "Data Science",
    description: "Master data science skills such as data cleaning, visualization, and building models.",
    image: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science-1536x960.jpg",
    link: "#subscribe-data-science",
  },
];

const Home = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  const handleCourseClick = (index) => {
    if (activeCourse === index) {
      setActiveCourse(null); // Close the popup if clicked again
    } else {
      setActiveCourse(index); // Open the popup for the clicked course
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Online Courses Platform</h1>
        <p className="text-lg text-gray-600">Explore and subscribe to courses that help you grow!</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row items-center cursor-pointer relative w-full"
            onClick={() => handleCourseClick(index)}
          >
            <div className="lg:w-2/3 p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-blue-500 mt-2 cursor-pointer">Tap to start</p>
            </div>
            <img
              src={course.image}
              alt={course.title}
              className="lg:w-1/3 h-full object-cover rounded-lg mb-4 lg:mb-0"
            />

            {/* Popup Options (Subscribe/Pay) */}
            {activeCourse === index && (
              <div
                className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-0 hover:opacity-100"
                style={{
                  transition: 'opacity 0.3s ease-in-out',
                  display: activeCourse === index ? 'flex' : 'none',
                }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg w-84 text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Choose an Action</h4>
                  <div className="flex space-x-4">
                  <Link
  to="/sign-up"
  state={{ course }} // Pass course data directly to the SignUp page
  className="border-2 border-blue-500 text-blue-500 py-2 px-4 rounded transition duration-300 hover:bg-gray-100"
>
  Subscribe
</Link>

                    <Link
                                       to="../payment"
                                       state={{ course }}
                      className="border-2 border-green-500 text-green-500 py-2 px-4 rounded transition duration-300 hover:bg-gray-100"
                    >
                      Make Payment
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
