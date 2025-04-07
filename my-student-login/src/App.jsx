import React, { useState } from 'react';

const StudentLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Add actual login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      {/* Background design elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-400 rounded-full opacity-10 blur-xl"></div>
      
      {/* Login Card with Glassmorphic effect */}
      <div className="w-full max-w-md p-8 m-4 rounded-xl backdrop-blur-lg bg-white/10 shadow-xl border border-white/20 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Student Login</h2>
          <p className="text-blue-200 mt-2">Access your student portal</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-blue-200 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="your.email@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-blue-200 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex justify-between mb-6 text-sm">
            <a href="#forgot-password" className="text-blue-300 hover:text-blue-100 transition-colors">
              Forgot Password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-blue-200">
            Don't have an account?{' '}
            <a href="#register" className="text-blue-300 hover:text-blue-100 font-semibold transition-colors">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;