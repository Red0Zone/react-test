import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const success = onLogin({ username, password });
    
    if (!success) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-secondary rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-primary">Welcome Back</h1>
          <p className="mt-2 text-text">Please sign in to your account</p>
        </div>
        
        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-100 border-l-4 border-red-500 rounded-md flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-primary">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-primary">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary">
                  Forgot password?
                </a>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-primary border-secondary rounded focus:ring-primary"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-primary">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-secondary bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
            >
              Sign in
            </button>
          </div>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-primary">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-primary hover:text-primary">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;