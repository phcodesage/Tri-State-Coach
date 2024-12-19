import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import busImage from '../assets/contact-us-bg.png'
import LocationIcon from '../assets/location-icon.png';
import PhoneIcon from '../assets/phone-icon.png';
import EmailIcon from '../assets/email-icon.png';
import gradientOverlay from '../assets/gradient-image.png';

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  return (
    <div className="min-h-screen font-palatino">
      <Navbar />
      
      {/* Hero Section with Background */}
      <div className="relative h-[40vh] md:h-[60vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${busImage})`
          }}
        />

        {/* Content */}
        <div className="relative h-full">
          <div className="container mx-auto px-4">
            <div className="pt-24 md:pt-40 text-center">
              <h1 
                className="text-3xl md:text-4xl font-bold font-palatino"
                style={{
                  fontFamily: 'Palatino Linotype, serif',
                  background: 'linear-gradient(to bottom, #FFEADD 0%, #908345 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Contact Us
              </h1>
            </div>
          </div>

        </div>

      </div>



      {/* Gradient Transition Section */}
      <div className="relative bg-gradient-to-b from-[#FFFCED] to-[#FFFCED]/50 pb-16 md:pb-32">
        <div 
          className="absolute inset-x-0 top-0 h-32"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 252, 237, 0) 0%, #FFFCED 100%)'
          }}
        />
        <div className="container mx-auto px-4">
          {/* Form and Help Section Container */}
          <div className="relative -top-16 md:-top-32">
            <div className="flex flex-col lg:flex-row justify-end">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2 lg:ml-auto">
                <div className="bg-white rounded-lg p-6 md:p-8 border-t-[10px] border-t-[#A13D3D]" 
                  style={{ 
                    boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.2)',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-600 mb-2 font-inter">Name</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full px-4 py-3 rounded-md border border-[#908345] focus:outline-none focus:ring-1 focus:ring-[#908345] font-inter"
                        placeholder="Enter your name here"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2 font-inter">Email</label>
                      <input
                        {...register('email', { required: true })}
                        className="w-full px-4 py-3 rounded-md border border-[#908345] focus:outline-none focus:ring-1 focus:ring-[#908345] font-inter"
                        placeholder="Enter your mail here"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2 font-inter">Subject</label>
                      <input
                        {...register('subject', { required: true })}
                        className="w-full px-4 py-3 rounded-md border border-[#908345] focus:outline-none focus:ring-1 focus:ring-[#908345] font-inter"
                        placeholder="Enter your subject here"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2 font-inter">Message</label>
                      <textarea
                        {...register('message', { required: true })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border border-[#908345] focus:outline-none focus:ring-1 focus:ring-[#908345] font-inter"
                        placeholder="Enter your message here"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#991616] text-white py-3 rounded-md hover:bg-[#8A3434] transition-colors font-inter font-bold"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* How can we help section */}
            <div className="mt-8 lg:absolute lg:left-0 lg:bottom-0 lg:w-5/12 w-full">
              <div className="bg-[#FFFCED]/90 p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold font-palatino mb-4 md:mb-6 text-[#908345]">
                  How can we help?
                </h2>
                <p className="text-gray-600 mb-6 md:mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit.
                </p>

                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <button className="w-full flex items-center justify-between text-left">
                      <span className="text-[#908345] text-lg font-medium">How can we help?</span>
                      <span className="text-[#A13D3D] text-2xl md:text-3xl">•</span>
                    </button>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <button className="w-full flex items-center justify-between text-left">
                      <span className="text-[#908345] text-lg font-medium">How can we help?</span>
                      <span className="text-[#A13D3D] text-2xl md:text-3xl">•</span>
                    </button>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <button className="w-full flex items-center justify-between text-left">
                      <span className="text-[#908345] text-lg font-medium">How can we help?</span>
                      <span className="text-[#A13D3D] text-2xl md:text-3xl">•</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-16 bg-white rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8" 
            style={{ 
              boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.4)',
              fontFamily: 'Palatino Linotype, serif'
            }}>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={LocationIcon} alt="Location" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-palatino text-[#908345] mb-2">Location</h3>
              <p className="text-gray-600">
                38 Southern Blvd. Ste 5<br/>
                Nesconset NY 11767
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={PhoneIcon} alt="Phone" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-palatino text-[#908345] mb-2">Phone</h3>
              <p className="text-gray-600">(631) 543 2500</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={EmailIcon} alt="Email" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-palatino text-[#908345] mb-2">E-mail</h3>
              <p className="text-gray-600">tristatecoachbus@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
