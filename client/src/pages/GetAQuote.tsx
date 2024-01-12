import Navbar from "../Components/Navbar";
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function GetAQuote() {
  const [activeForm, setActiveForm] = useState('route-details');
  const [stops, setStops] = useState([]);
  const [returnDate, setReturnDate] = useState({ date: '', time: '' });
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', company: '' });

  const addStop = () => {
    setStops([...stops, { id: Math.random(), value: '' }]);
  };

  const removeStop = (id) => {
    setStops(stops.filter(stop => stop.id !== id));
  };

  const removeStops = () => {
    setStops([]);
  };

  const toggleReturnDate = () => {
    if (returnDate.date || returnDate.time) {
      setReturnDate({ date: '', time: '' });
    } else {
      setReturnDate({ date: '2023-01-01', time: '12:00' });
    }
  };

  const removeReturn = () => {
    setReturnDate({ date: '', time: '' });
  };

  const setActiveFormHandler = (formId) => {
    setActiveForm(formId);
  };

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitAll = (e) => {
    e.preventDefault();
    // Here you would handle the submission of all forms data
    // For example, you can send data to an API or log it to the console
    console.log({ stops, returnDate, contactInfo });
  };
  return (
    <>
      <Navbar />

      <div className="isolate bg-white px-6 py-10 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get a Quote</h2>
          {/* Buttons below the heading */}
          <div className="flex justify-center gap-4 mt-4">
            {/* Button styles adjusted */}
            <button onClick={() => setActiveFormHandler('route-details')} className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"><svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.376 0c-0.191 0-0.422 0.054-0.691 0.168l-29.833 12.659c-1.074 0.456-1.142 1.334-0.151 1.951l8.43 5.251c0.991 0.617 2.301 1.94 2.912 2.939l5.053 8.274c0.29 0.474 0.64 0.71 0.977 0.71 0.372 0 0.727-0.286 0.97-0.851l12.758-29.805c0.345-0.808 0.148-1.296-0.426-1.297zM10.174 18.248l-6.833-4.257 22.925-9.726-14.756 15.006c-0.451-0.4-0.909-0.757-1.337-1.023zM17.898 28.602l-4.076-6.672c-0.241-0.394-0.558-0.814-0.912-1.231l14.825-15.075z"></path> </g></svg></button>
            <button onClick={() => setActiveFormHandler('bus-requirements')} className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"><svg fill="#000000" width="50px" height="50px" viewBox="0 -0.5 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bus</title> <path d="M22 29.012c0 0.553 0.447 1 1 1h1c0.552 0 1-0.447 1-1v-2.062h-3v2.062zM8 29.012c0 0.553 0.447 1 1 1h1c0.553 0 1-0.447 1-1v-2.062h-3v2.062zM4.985 25.729c0 0.67 0.544 1.215 1.215 1.215h20.596c0.671 0 1.215-0.545 1.215-1.215 0-0.672 0-0.715 0-0.715h-23.026c0 0 0 0.043 0 0.715zM32 10.012v-2h-3.99l0.001-1.088c0-2.431-2.489-4.937-11.974-4.937-8.338 0-11.052 2.506-11.052 4.937v1.088h-3.985v2h-1v4h1v2h3.985v7.974h23l0.022-14.974h2.993v1h-1v4h1v1h-3v1h4v-2h1v-4h-1zM4.985 15.012h-2.985v-1h1v-4h-1v-1h2.985v6zM12.5 4.95h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5zM7.041 9.229c0-0.671 0.544-1.215 1.215-1.215h6.514c0.671 0 1.215 0.544 1.215 1.215v3.583c0 0.672-0.544 1.216-1.215 1.216h-6.514c-0.671 0-1.215-0.544-1.215-1.216v-3.583zM8.988 21.738c-1.007 0-1.822-0.816-1.822-1.822 0-1.008 0.815-1.822 1.822-1.822s1.823 0.814 1.823 1.822c0.001 1.006-0.816 1.822-1.823 1.822zM12 17.012h9v1h-9v-1zM21.032 21.943h-9.006v-0.965h9.006v0.965zM21.032 19.951h-9.006v-0.965h9.006v0.965zM24.008 21.801c-1.007 0-1.822-0.816-1.822-1.822s0.815-1.822 1.822-1.822 1.823 0.816 1.823 1.822-0.816 1.822-1.823 1.822zM26.005 12.812c0 0.672-0.544 1.216-1.216 1.216h-6.562c-0.672 0-1.216-0.544-1.216-1.216v-3.583c0-0.671 0.544-1.215 1.216-1.215h6.562c0.672 0 1.216 0.544 1.216 1.215v3.583z"></path> </g></svg></button>
            <button onClick={() => setActiveFormHandler('contact-for-quote')} className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"><svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 455 455" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M297.5,212.5c-8.271,0-15,6.729-15,15s6.729,15,15,15s15-6.729,15-15S305.771,212.5,297.5,212.5z"></path> <polygon points="55,98.788 18.344,98.788 18.344,128.788 55,128.788 55,212.5 15,212.5 15,242.5 55,242.5 55,326.212 15,326.212 15,356.212 55,356.212 55,455 125,455 125,0 55,0 "></polygon> <path d="M155,0v455h285V0H155z M357.5,277.985c-12.009,0-23.193-4.807-31.494-13.534c-0.379-0.399-0.763-0.818-1.149-1.256 c-7.587,5.829-17.071,9.305-27.357,9.305c-24.813,0-45-20.187-45-45s20.187-45,45-45s45,20.187,45,45 c0,15.12,8.081,20.485,15,20.485s15-5.365,15-20.485c0-41.355-33.645-75-75-75s-75,33.645-75,75s33.645,75,75,75 c10.131,0,19.952-1.981,29.189-5.888l11.687,27.63c-12.955,5.479-26.708,8.258-40.875,8.258c-57.897,0-105-47.103-105-105 s47.103-105,105-105s105,47.103,105,105C402.5,260.644,379.862,277.985,357.5,277.985z"></path> </g> </g></svg></button>
          </div>
        </div>
        {/* Buttons below the heading */}
        
        {activeForm === 'route-details' && (
        <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-10" id="route-details">
          <h2 className="text-4xl font-bold dark:text-white py-4">Route Details</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Destination Input */}
            <div className="sm:col-span-2">
              <label htmlFor="destination" className="block text-sm font-semibold leading-6 text-gray-900">Destination</label>
              <div className="mt-2.5">
                <input type="text" name="destination" id="destination" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6" placeholder='Destination Address' />
              </div>
            </div>

            {/* Pickup Location Input */}
            <div className="sm:col-span-2">
              <label htmlFor="pickup-location" className="block text-sm font-semibold leading-6 text-gray-900">Pick-up Location</label>
              <div className="mt-2.5">
                <input type="text" name="pickup-location" id="pickup-location" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6" placeholder='Pick-up Address' />
              </div>
            </div>

            {/* Date and Time Input */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="relative w-1/2">
                  <input type="date" name="depart-date-start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Depart Date Start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative w-1/2">
                  <input type="time" name="depart-date-end" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Depart Time End" />
                </div>
              </div>
            </div>

            {/* Add Stop Section */}
            <div className="sm:col-span-2 mt-6">
              <div className="flex items-center justify-between">
                <button type="button" onClick={addStop} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Add Stop</button>
                {stops.length > 0 && (
                  <button type="button" onClick={removeStops} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove All Stops</button>
                )}
              </div>
              {stops.map((stop, index) => (
                <div key={stop.id} className="mt-2 flex items-center">
                  <input type="text" value={stop.value} onChange={(e) => {
                    const newStops = [...stops];
                    newStops[index].value = e.target.value;
                    setStops(newStops);
                  }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50" placeholder={`Stop ${index + 1}`} />
                  <button type="button" onClick={() => removeStop(stop.id)} className="ml-2 text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              ))}
            </div>

           {/* Add Return Section */}
          <div className="sm:col-span-2 mt-4">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={toggleReturnDate}
                className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Return
              </button>
              {returnDate.date && returnDate.time && (
                <button
                  type="button"
                  onClick={removeReturn}
                  className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Remove Return
                </button>
              )}
            </div>

            {/* Return Date and Time Picker */}
            {returnDate.date && returnDate.time && (
              <div className="mt-4 flex items-center justify-between">
                {/* Return Date Input */}
                <div className="relative w-1/2">
                  <input 
                    type="date" 
                    name="return-date" 
                    value={returnDate.date}
                    onChange={(e) => setReturnDate({ ...returnDate, date: e.target.value })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  />
                </div>
                <span className="mx-4 text-gray-500">at</span>
                {/* Return Time Input */}
                <div className="relative w-1/2">
                  <input 
                    type="time" 
                    name="return-time" 
                    value={returnDate.time}
                    onChange={(e) => setReturnDate({ ...returnDate, time: e.target.value })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  />
                </div>
              </div> 
            )}

            <div className="sm:col-span-2 mt-10">
              <button onClick={() => setActiveFormHandler('bus-requirements')} type="button" className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Continue </button>
            </div>
          </div>
          </div>
        </form> )}
        {activeForm === 'bus-requirements' && (
        <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-10" id="bus-requirements">
          <h2 class="text-4xl font-bold dark:text-white py-4">Bus Requirements</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Destination Input */}
            <div className="sm:col-span-2">
              <label htmlFor="destination" className="block text-sm font-semibold leading-6 text-gray-900">Party Size</label>
              <div className="mt-2.5">
                <input type="text" name="destination" id="destination" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6" placeholder='Number of seats will you need' />
              </div>
            </div>

            {/* Pickup Location Input */}
            <div className="sm:col-span-2">
              <label htmlFor="pickup-location" className="block text-sm font-semibold leading-6 text-gray-900">More details</label>
              <div className="mt-2.5">
                <input type="text" name="pickup-location" id="pickup-location" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6" placeholder='Things we should know, special needs, and other requests' />
              </div>
            </div>
            <div className="flex justify-between">
          <button onClick={() => setActiveFormHandler('route-details')} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back
          </button>
          <button onClick={() => setActiveFormHandler('contact-for-quote')} className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded">
            Continue
          </button>
        </div>
          
          </div>
        </form> )}
        {activeForm === 'contact-for-quote' && (
        <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-10" id="contact-for-quote">
          <h2 class="text-4xl font-bold dark:text-white py-4">Contact for Quote</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Name Input */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
              <div className="mt-2.5">
                <input type="text" name="destination" id="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6" placeholder='Jonathan Smithereen' />
              </div>
            </div>

            {/* Email Input */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="mt-2.5">
                <input type="text" name="email" id="pickup-location" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6" placeholder='email@email.com' />
              </div>
            </div>

            {/* Date and Time Input */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="relative w-1/2">
                  <input type="date" name="depart-date-start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Depart Date Start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative w-1/2">
                  <input type="time" name="depart-date-end" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Depart Time End" />
                </div>
              </div>
            </div>

            {/* Add Stop Section */}
            <div className="sm:col-span-2 mt-6">
              <div className="flex items-center justify-between">
                <button type="button" onClick={addStop} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Add Stop</button>
                {stops.length > 0 && (
                  <button type="button" onClick={removeStops} className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove All Stops</button>
                )}
              </div>
              {stops.map((stop, index) => (
                <div key={stop.id} className="mt-2 flex items-center">
                  <input type="text" value={stop.value} onChange={(e) => {
                    const newStops = [...stops];
                    newStops[index].value = e.target.value;
                    setStops(newStops);
                  }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50" placeholder={`Stop ${index + 1}`} />
                  <button type="button" onClick={() => removeStop(stop.id)} className="ml-2 text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              ))}
            </div>

           {/* Add Return Section */}
          <div className="sm:col-span-2 mt-4">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={toggleReturnDate}
                className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Return
              </button>
              {returnDate.date && returnDate.time && (
                <button
                  type="button"
                  onClick={removeReturn}
                  className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Remove Return
                </button>
              )}
            </div>

            {/* Return Date and Time Picker */}
            {returnDate.date && returnDate.time && (
              <div className="mt-4 flex items-center justify-between">
                {/* Return Date Input */}
                <div className="relative w-1/2">
                  <input 
                    type="date" 
                    name="return-date" 
                    value={returnDate.date}
                    onChange={(e) => setReturnDate({ ...returnDate, date: e.target.value })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  />
                </div>
                <span className="mx-4 text-gray-500">at</span>
                {/* Return Time Input */}
                <div className="relative w-1/2">
                  <input 
                    type="time" 
                    name="return-time" 
                    value={returnDate.time}
                    onChange={(e) => setReturnDate({ ...returnDate, time: e.target.value })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  />
                </div>
              </div>
            )}

              <div className="flex justify-between mt-4">
                <button onClick={() => setActiveFormHandler('bus-requirements')} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  Back
                </button>
                <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
          </div>
          </div>
        </form>
        )}
      </div>
    </>
  );
}
