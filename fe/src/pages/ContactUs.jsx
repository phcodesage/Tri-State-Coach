import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import busImage from '../assets/contact-us-bg.png'

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://3.138.43.172/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      
      {/* Hero Section with Background */}
      <div className="relative min-h-screen">
        {/* Hero Section with Background */}
        <div className="relative h-screen">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${busImage})`,
              backgroundPosition: 'center'
            }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 h-full">
            {/* Title and Form Container */}
            <div className="container mx-auto px-4 pt-32">
              <div className="flex flex-col lg:flex-row justify-between items-start">
                {/* Left Side - Title and Description */}
                <div className="w-full lg:w-1/2 text-gold mb-8 lg:mb-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-4xl">🚌</span>
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                  </div>
                  <p className="text-white/80 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-[450px]">
                  <div className="bg-white rounded-lg p-8">
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Name</label>
                        <input
                          {...register('name', { required: true })}
                          type="text"
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Enter your name here"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Email</label>
                        <input
                          {...register('email', { required: true })}
                          type="email"
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Enter your mail here"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Subject</label>
                        <input
                          {...register('subject', { required: true })}
                          type="text"
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Enter your subject here"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Message</label>
                        <textarea
                          {...register('message', { required: true })}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Enter your message here"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#A13D3D] text-white py-3 rounded-md hover:bg-[#8A3434] transition-colors"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-ivory py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gold mb-8">How can we help?</h2>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-medium text-gold">How can we help?</h3>
                  <span className="text-gold">•</span>
                </summary>
                <p className="mt-4 text-gray-600">Answer to the question goes here...</p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-medium text-gold">How can we help?</h3>
                  <span className="text-gold">•</span>
                </summary>
                <p className="mt-4 text-gray-600">Answer to the question goes here...</p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-medium text-gold">How can we help?</h3>
                  <span className="text-gold">•</span>
                </summary>
                <p className="mt-4 text-gray-600">Answer to the question goes here...</p>
              </details>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-16 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>38 Southern Blvd. Ste 5<br/>Nesconset NY 11767</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>(631) 543 2500</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p>tristatecoachbus@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {submissionSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-50 p-4 rounded-md shadow-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
