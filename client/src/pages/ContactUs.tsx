
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Switch } from '@headlessui/react';

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [agreed, setAgreed] = useState(false)
  // ContactUs.js
  const handleFormSubmit = async (formData) => {
    console.log(formData)
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
    <Navbar />
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />

      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Send us a message</h2>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2">     
      
      <form onSubmit={handleSubmit(handleSubmit(handleFormSubmit))} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-m font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
              {...register('name', { required: true })}
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-m sm:leading-6"
                placeholder='Full Name'
              /> {errors.name && <p className="text-red-600">Name is required</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-m font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-m sm:leading-6"
                placeholder='email@email.com'
              /> {errors.email && <p className="text-red-600">Valid email is required</p>}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-m font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
               {...register('message', { required: true })}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-m sm:leading-6"
                defaultValue={''}
                placeholder='Leave us a message'
              /> {errors.message && <p className="text-red-600">Message is required</p>}
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-rose-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-m leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="/privacy-policy" className="font-semibold text-rose-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-m font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
      <div className="flex-col justify-center items-center mt-12 lg:mt-0 lg:col-span-1 text-center">
        <div className="flex-col">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-20">TRI-STATECOACH</h3>
        <dl className="mt-8 text-base text-gray-500">
        <div className='flex justify-center'>
            <dd><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000"></path> </g></svg></dd>
          </div>
          <div>
            <dt className="font-semibold">Address</dt>
            <dd>38 Southern Blvd. Ste 5
Nesconset<br/>NY, 11767</dd>
          </div>
          <div className="mt-6">
            <dt className="font-semibold">Phone</dt>
            <dd>(631) 543 2500</dd>
          </div>
          <div className="mt-6">
            <dt className="font-semibold">Email</dt>
            <dd>tristatecoachbus@gmail.com</dd>
          </div>
        </dl>
      </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
