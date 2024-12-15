import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a simple React component styled with Tailwind CSS via CDN.
        </p>
      </div>
    </div>
  );
};

export default Home;
