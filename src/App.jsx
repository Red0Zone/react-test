// App.jsx - Main application component with routing setup
import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
          <div className="text-xl font-semibold text-gray-900">React Router Demo</div>
        </div>
      </nav>

      <main className="max-w-6xl px-4 py-8 mx-auto">
        <HomePage />
      </main>
    </div>
  );
}

export default App;



