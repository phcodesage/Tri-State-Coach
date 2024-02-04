import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';




function login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [ token, setToken ] = useState(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  // Check if the user is already authenticated
  useEffect(() => {
    if (token && location.pathname !== '/admin') {
      navigate('/admin');
    }
  }, [navigate, location.pathname, token]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        localStorage.setItem('token', responseData.accessToken);
        localStorage.setItem('refreshToken', responseData.refreshToken);
        setIsLoading(false);
        navigate('/admin');
      } else {
        setError(responseData.error || 'An error occurred during the login process');
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message || 'Network response was not ok');
      setIsLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md px-6 py-8 bg-gray-800 rounded-lg shadow-lg">
      {error && (
      <div className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
        {/* ... SVG and other static content */}
        <div>
          <span className="font-medium">Error!</span> {error}
        </div>
      </div>
    )}
        <h1 className="text-2xl font-bold text-center text-white mb-8">Sign in to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">Your Username</label>
            <input type="name" id="username" {...register('username', { required: 'Username is required' })} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none" required />
            {errors.username && <span className="text-red-500 text-xs">{errors.username.message}</span>}
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input type={showPassword ? 'text' : 'password'} id="password" {...register('password', { required: 'Password is required' })} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none" required />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-white-400 cursor-pointer" onClick={togglePassword}>
              {showPassword ? '🙈' : '👁️'}
            </div>
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
          </div>
          <button type="submit" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:bg-rose-400">
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 01.33-2.217m.176-2.236A8.001 8.001 0 0112 4v0a8 8 0 018 8h0a8 8 0 01-8 8v0a8 8 0 01-8-8h0z"></path>
              </svg>
            ) : 'Sign in'}
          </button>
        </form>

      </div>
    </div>
  )
}

export default login