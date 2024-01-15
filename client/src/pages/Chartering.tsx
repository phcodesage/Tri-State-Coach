import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Bushero from '../assets/Regency_Buses_Coach_Bus_Fleet_Charter-p-1080.png'

function Chartering() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-auto" src={Bushero} alt="" />
          </a>
          <div className="p-4 md:p-8 text-center">
            <a href="#">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Need a Transportation Department for your organization?</h5>
            </a>
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">Look no further and get a tailored operational plan from our bid and contract service specialists now:</p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="tel:+16315432500" className="inline-flex items-center px-3 py-2 text-m font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
                Call Us Now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
              <a href="/invoice" className="inline-flex items-center px-3 py-2 text-m font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300">
                Pay Invoice
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>

  )
}

export default Chartering
