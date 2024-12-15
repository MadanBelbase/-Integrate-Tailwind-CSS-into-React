import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 text-white w-full py-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Tailwind CSS with React and Vite</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">React and Tailwind CSS Integration with Vite</h2>
          <p className="text-gray-600 mb-6">
            This is a simple example of how to integrate React with Tailwind CSS using Vite.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 w-full py-4 text-center">
        <p className="text-sm">&copy; 2024 Your Madan Belbase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;