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
          
          <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <div className="relative flex">
          <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-white cursor-pointer"
    onClick={togglePassword}>
    
      {showPassword ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )}
  </button>
    <input
    type={showPassword ? 'text' : 'password'}
    id="password"
    {...register('password', { required: 'Password is required' })}
    className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
    required
  />
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