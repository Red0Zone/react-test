import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link, useParams } from "react-router-dom";

const themes = ['black', 'red', 'orange', 'purple', 'cyan'];
const DEFAULT_THEME = 'black'; // Define a default theme constant

function HomePage({ onLogout }) {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  console.log(theme);
  const params = useParams();
  const username = params.name || 'User';

  // Initialize theme state with the default

  
  // Effect to set theme based on URL parameter
  useEffect(() => {
    const colorFromParams = params.color;
    if (colorFromParams) {
      if (themes.includes(colorFromParams)) {
        // Only update if the theme from params is different from the current theme
        // This prevents an unnecessary state update if the param matches the default or current state
        if (colorFromParams !== theme) {
            setTheme(colorFromParams);
        }
      } else {
        alert('The color you choose is not available');
        // Optional: You might want to navigate away or set a default theme here
        // if the param color is invalid, instead of just alerting.
        // Example: setTheme(DEFAULT_THEME);
      }
    }
    // Run this effect only when params.color changes
  }, [params.color, theme]); // Added theme to dependency array to avoid unnecessary update if already set

  // Effect to update the DOM when the theme state changes
  useEffect(() => {
    const root = document.documentElement;
    // Remove existing theme classes before adding the new one
    // A more robust way is to remove only known theme classes
    themes.forEach(t => root.classList.remove(`theme-${t}`));
    root.classList.add(`theme-${theme}`);

    // Optional cleanup function to remove the class when the component unmounts
    return () => {
      root.classList.remove(`theme-${theme}`);
    };
    // Run this effect only when the theme state changes
  }, [theme]);

  return (
    // The rest of your component JSX remains the same...
    <div className="min-h-screen min-w-screen bg-background">
      <nav className="bg-primary shadow-md border-b border-secondary">
        <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-secondary font-bold">R</span>
            </div>
            <div className="text-xl font-bold text-secondary">React Router Demo</div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <span className="text-white font-bold">Welcome,</span>
              <span className="font-medium text-white">{username}</span>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-secondary bg-primary rounded-md hover:bg-primary transition duration-150 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl px-6 py-12 mx-auto">
        {/* Theme Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-text mb-2">Choose a theme:</h3>
          <div className="flex flex-row gap-4">
            {themes.map((themeOption) => (
              <Link to={`/${themeOption}/${params.name || 'User'}`}>
              <div
                key={themeOption}
                className={`cursor-pointer px-3 py-1 border rounded-md hover:bg-text hover:text-secondary hover:font-bold transition duration-150 ${
                  theme === themeOption ? 'border-white bg-primary text-white' : 'border-text text-text' // Highlight active theme
                }`}
              >
                {themeOption}
              </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8 bg-secondary rounded-xl shadow-lg border border-text">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              {/* SVG Icon */}
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <h1 className="text-3xl font-bold text-text">Welcome to the Dashboard</h1>
          </div>

          <p className="mt-2 text-lg text-text">
            This is a protected route. You can only see this page if you're logged in.
          </p>

          {/* Rest of the dashboard content... */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-secondary rounded-lg border border-text">
              <div className="text-primary mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text">Analytics</h2>
              <p className="mt-2 text-text">
                View detailed analytics and reports for your account
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg border border-text">
              <div className="text-primary mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text">Create New</h2>
              <p className="mt-2 text-text">
                Create new projects and manage your content
              </p>
            </div>

            <div className="p-6 bg-secondary rounded-lg border border-text">
              <div className="text-primary mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text">Schedule</h2>
              <p className="mt-2 text-text">
                View upcoming events and manage your calendar
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-background rounded-lg border border-text">
            <h3 className="text-xl font-semibold text-background mb-4">Quick Stats</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-secondary p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-text">Total Views</div>
                <div className="text-2xl font-bold text-primary">8,249</div>
              </div>
              <div className="bg-secondary p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-text">New Users</div>
                <div className="text-2xl font-bold text-primary">+24%</div>
              </div>
              <div className="bg-secondary p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-text">Engagement</div>
                <div className="text-2xl font-bold text-primary">92%</div>
              </div>
              <div className="bg-secondary p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-text">Completion</div>
                <div className="text-2xl font-bold text-primary">87%</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary border-t border-text mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-text text-sm">
            © 2025 React Router Demo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
