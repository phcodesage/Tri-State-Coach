import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function GetAQuote() {
  const [activeForm, setActiveForm] = useState('route-details');
  const [stops, setStops] = useState([]);
  const [returnDate, setReturnDate] = useState({ date: '', time: '' });

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

  return (
    <>
      <Navbar />

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get a Quote</h2>
          {/* Buttons below the heading */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => setActiveFormHandler('route-details')} className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">Button 1</button>
            <button onClick={() => setActiveFormHandler('bus-requirements')} className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">Button 2</button>
            <button onClick={() => setActiveFormHandler('contact-for-quote')} className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">Button 3</button>
          </div>
        </div>
        {/* Buttons below the heading */}
        
        {activeForm === 'route-details' && (
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" id="route-details">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Destination Input */}
            <div className="sm:col-span-2">
              <label htmlFor="destination" className="block text-sm font-semibold leading-6 text-gray-900">Destination</label>
              <div className="mt-2.5">
                <input type="text" name="destination" id="destination" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder='Destination Address' />
              </div>
            </div>

            {/* Pickup Location Input */}
            <div className="sm:col-span-2">
              <label htmlFor="pickup-location" className="block text-sm font-semibold leading-6 text-gray-900">Pick-up Location</label>
              <div className="mt-2.5">
                <input type="text" name="pickup-location" id="pickup-location" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder='Pick-up Address' />
              </div>
            </div>

            {/* Date and Time Input */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="relative w-1/2">
                  <input type="date" name="depart-date-start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Depart Date Start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative w-1/2">
                  <input type="time" name="depart-date-end" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Depart Time End" />
                </div>
              </div>
            </div>

            {/* Add Stop Section */}
            <div className="sm:col-span-2 mt-6">
              <div className="flex items-center justify-between">
                <button type="button" onClick={addStop} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Add Stop</button>
                {stops.length > 0 && (
                  <button type="button" onClick={removeStops} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove All Stops</button>
                )}
              </div>
              {stops.map((stop, index) => (
                <div key={stop.id} className="mt-2 flex items-center">
                  <input type="text" value={stop.value} onChange={(e) => {
                    const newStops = [...stops];
                    newStops[index].value = e.target.value;
                    setStops(newStops);
                  }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50" placeholder={`Stop ${index + 1}`} />
                  <button type="button" onClick={() => removeStop(stop.id)} className="ml-2 text-red-500 hover:text-red-700">
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
                className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Return
              </button>
              {returnDate.date && returnDate.time && (
                <button
                  type="button"
                  onClick={removeReturn}
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
                  />
                </div>
              </div>
            )}

            <div className="sm:col-span-2 mt-10">
              <button type="submit" className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Submit</button>
            </div>
          </div>
          </div>
        </form> )}
        {activeForm === 'bus-requirements' && (
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" id="bus-requirements">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Destination Input */}
            <div className="sm:col-span-2">
              <label htmlFor="destination" className="block text-sm font-semibold leading-6 text-gray-900">Destination</label>
              <div className="mt-2.5">
                <input type="text" name="destination" id="destination" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder='Destination Address' />
              </div>
            </div>

            {/* Pickup Location Input */}
            <div className="sm:col-span-2">
              <label htmlFor="pickup-location" className="block text-sm font-semibold leading-6 text-gray-900">Pick-up Location</label>
              <div className="mt-2.5">
                <input type="text" name="pickup-location" id="pickup-location" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder='Pick-up Address' />
              </div>
            </div>

            {/* Date and Time Input */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="relative w-1/2">
                  <input type="date" name="depart-date-start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Depart Date Start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative w-1/2">
                  <input type="time" name="depart-date-end" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Depart Time End" />
                </div>
              </div>
            </div>

            {/* Add Stop Section */}
            <div className="sm:col-span-2 mt-6">
              <div className="flex items-center justify-between">
                <button type="button" onClick={addStop} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Add Stop</button>
                {stops.length > 0 && (
                  <button type="button" onClick={removeStops} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove All Stops</button>
                )}
              </div>
              {stops.map((stop, index) => (
                <div key={stop.id} className="mt-2 flex items-center">
                  <input type="text" value={stop.value} onChange={(e) => {
                    const newStops = [...stops];
                    newStops[index].value = e.target.value;
                    setStops(newStops);
                  }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50" placeholder={`Stop ${index + 1}`} />
                  <button type="button" onClick={() => removeStop(stop.id)} className="ml-2 text-red-500 hover:text-red-700">
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
                className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Return
              </button>
              {returnDate.date && returnDate.time && (
                <button
                  type="button"
                  onClick={removeReturn}
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
                  />
                </div>
              </div>
            )}

            <div className="sm:col-span-2 mt-10">
              <button type="submit" className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Submit</button>
            </div>
          </div>
          </div>
        </form> )}
        {activeForm === 'contact-for-quote' && (
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" id="contact-for-quote">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Destination Input */}
            <div className="sm:col-span-2">
              <label htmlFor="destination" className="block text-sm font-semibold leading-6 text-gray-900">Destination</label>
              <div className="mt-2.5">
                <input type="text" name="destination" id="destination" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder='Destination Address' />
              </div>
            </div>

            {/* Pickup Location Input */}
            <div className="sm:col-span-2">
              <label htmlFor="pickup-location" className="block text-sm font-semibold leading-6 text-gray-900">Pick-up Location</label>
              <div className="mt-2.5">
                <input type="text" name="pickup-location" id="pickup-location" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6" placeholder='Pick-up Address' />
              </div>
            </div>

            {/* Date and Time Input */}
            <div className="sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="relative w-1/2">
                  <input type="date" name="depart-date-start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Depart Date Start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative w-1/2">
                  <input type="time" name="depart-date-end" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="Depart Time End" />
                </div>
              </div>
            </div>

            {/* Add Stop Section */}
            <div className="sm:col-span-2 mt-6">
              <div className="flex items-center justify-between">
                <button type="button" onClick={addStop} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Add Stop</button>
                {stops.length > 0 && (
                  <button type="button" onClick={removeStops} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove All Stops</button>
                )}
              </div>
              {stops.map((stop, index) => (
                <div key={stop.id} className="mt-2 flex items-center">
                  <input type="text" value={stop.value} onChange={(e) => {
                    const newStops = [...stops];
                    newStops[index].value = e.target.value;
                    setStops(newStops);
                  }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50" placeholder={`Stop ${index + 1}`} />
                  <button type="button" onClick={() => removeStop(stop.id)} className="ml-2 text-red-500 hover:text-red-700">
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
                className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Return
              </button>
              {returnDate.date && returnDate.time && (
                <button
                  type="button"
                  onClick={removeReturn}
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-rose-500 focus:border-rose-500 block w-full pl-3.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
                  />
                </div>
              </div>
            )}

            <div className="sm:col-span-2 mt-10">
              <button type="submit" className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">Submit</button>
            </div>
          </div>
          </div>
        </form>
        )}
      </div>

      <Footer />
    </>
  );
}
