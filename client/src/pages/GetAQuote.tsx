import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function GetAQuote() {
  return (
    <>
    <Navbar />
    <div className="flex-col justify-center items-center text-center m-5 h-screen">
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get a Quote</h1>
    <div className="flex justify-center gap-4">

    <div className="relative inline-block text-left">
        <div>
            <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="menu-button-1" aria-expanded="true" aria-haspopup="true">
            <svg className="w-16 h-16 text-gray-800 dark:text-white" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>paper-plane</title> <path d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z"></path> </g></svg>
            </button>
        </div>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button-1" tabIndex="-1">
  
        </div>
    </div>


    <div className="relative inline-block text-left">
        <div>
            <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="menu-button-2" aria-expanded="true" aria-haspopup="true">
            <svg className="w-16 h-16 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path d="M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
            </button>
        </div>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button-2" tabIndex="-1">

        </div>
    </div>


    <div className="relative inline-block text-left">
        <div>
            <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="menu-button-3" aria-expanded="true" aria-haspopup="true">
            <svg className="w-16 h-16 text-gray-800 dark:text-white" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 455 455" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M297.5,212.5c-8.271,0-15,6.729-15,15s6.729,15,15,15s15-6.729,15-15S305.771,212.5,297.5,212.5z"></path> <polygon points="55,98.788 18.344,98.788 18.344,128.788 55,128.788 55,212.5 15,212.5 15,242.5 55,242.5 55,326.212 15,326.212 15,356.212 55,356.212 55,455 125,455 125,0 55,0 "></polygon> <path d="M155,0v455h285V0H155z M357.5,277.985c-12.009,0-23.193-4.807-31.494-13.534c-0.379-0.399-0.763-0.818-1.149-1.256 c-7.587,5.829-17.071,9.305-27.357,9.305c-24.813,0-45-20.187-45-45s20.187-45,45-45s45,20.187,45,45 c0,15.12,8.081,20.485,15,20.485s15-5.365,15-20.485c0-41.355-33.645-75-75-75s-75,33.645-75,75s33.645,75,75,75 c10.131,0,19.952-1.981,29.189-5.888l11.687,27.63c-12.955,5.479-26.708,8.258-40.875,8.258c-57.897,0-105-47.103-105-105 s47.103-105,105-105s105,47.103,105,105C402.5,260.644,379.862,277.985,357.5,277.985z"></path> </g> </g></svg>
            </button>
        </div>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button-3" tabIndex="-1">

        </div>
    </div>
</div>
</div>
    <Footer />
    </>
  )
}
