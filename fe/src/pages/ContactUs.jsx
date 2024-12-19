import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import busImage from '../assets/contact-us-bg.png'
import busIcon from '../assets/bus-icon.png'

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${busImage})`
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Title with bus icon */}
          <div className="pt-32 text-center">
            <img src={busIcon} alt="Bus Icon" className="w-12 h-12 mx-auto mb-4" />
            <h1 
              className="text-4xl font-bold"
              style={{
                background: 'linear-gradient(to bottom, #FFEADD 0%, #908345 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Contact Us
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {/* Left Side - How can we help */}
            <div className="bg-[#FFFCED]/90 p-8 rounded-lg">
              <h2 className="text-[#908345] text-3xl font-bold mb-6">How can we help?</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit.
              </p>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-[#908345] text-lg font-medium">How can we help?</span>
                    <span className="text-[#A13D3D] text-xl">•</span>
                  </button>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-[#908345] text-lg font-medium">How can we help?</span>
                    <span className="text-[#A13D3D] text-xl">•</span>
                  </button>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="text-[#908345] text-lg font-medium">How can we help?</span>
                    <span className="text-[#A13D3D] text-xl">•</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#908345]"
                    placeholder="Enter your name here"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    {...register('email', { required: true })}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#908345]"
                    placeholder="Enter your mail here"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Subject</label>
                  <input
                    {...register('subject', { required: true })}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#908345]"
                    placeholder="Enter your subject here"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#908345]"
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

          {/* Contact Info Cards */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#A13D3D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>38 Southern Blvd. Ste 5<br/>Nesconset NY 11767</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#A13D3D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>(631) 543 2500</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#A13D3D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p>tristatecoachbus@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
