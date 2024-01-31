import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';


function login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [ token, setToken ] = useState(localStorage.getItem('token'));

  // Check if the user is already authenticated
  useEffect(() => {
    if (token && location.pathname !== '/admin') {
      navigate('/admin');
    }
  }, [navigate, location.pathname, token]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid credentials');
      }
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      localStorage.setItem('token', responseData.accessToken); // Store the access token
      localStorage.setItem('refreshToken', responseData.refreshToken); // Store the refresh token
      setToken(responseData.accessToken);
      navigate('/admin');// Redirect to admin route
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error to user
    }
  };

  return (
    <div><section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" id="username" {...register('username')} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="admin username" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" {...register('password')} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Sign in</button>
                   
                </form>
            </div>
        </div>
        <a href="/" className="mt-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                ← Back Home
            </a>
    </div>
  </section></div>
  )
}

export default login