import TicketCard from '../assets/tick-item-card-white.svg'
import BearcatLogo from '../assets/binghamton-logo-bearcat.png'
import RedDragon from '../assets/sunny-cortland.png'
import Delaware from '../assets/Delaware-Logo.png'
import SunyOswego from '../assets/Sunny-Oswego.png'

function getLogoByLineName(lineName) {
  switch (lineName) {
    case "Bearcat Bus - SUNY Binghamton":
      return BearcatLogo;
    case "Red Dragon Express - SUNY Cortland":
      return RedDragon;
    case "Delaware to Long Island - University of Delaware":
      return Delaware;
    case "Oswego to Long Island - SUNY Oswego":
      return SunyOswego;
    default:
      return BearcatLogo; // default logo if no match
  }
}

export default function BusTicketCard({ ticket, lineName }) {
  const logo = getLogoByLineName(lineName);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-lg"
         style={{ 
           backgroundImage: `url(${TicketCard})`, 
           backgroundSize: '100% auto', 
           backgroundPosition: 'top center', 
           backgroundRepeat: 'no-repeat',
           minHeight: '390px', 
           maxWidth: '320px',
          "width":"355px","height":"459px","background":"#FFFFFF","boxShadow":"0px 5px 40px rgba(0, 0, 0, 0.4)","borderRadius":"20px"
         }}>
          <div className="flex-grow">
      <a href={ticket.link} className='flex justify-center' style={{ maxHeight: '139px' }}>
        <img className="p-8 rounded-t-lg" src={logo} alt={ticket.title} />
      </a>
      <div className="px-5 pb-5">
        <div className="my-4">
          <a href={ticket.link}>
              <h5 style={{"width":"249px","height":"24px","left":"100px","top":"1181px","fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"700","fontSize":"20px","lineHeight":"24px","textAlign":"center","color":"#000000"}}>{ticket.title}</h5>
          </a>
          <div className="flex items-center justify-start my-2">
              {/* SVG calendar icon code here */}<svg className="w-6 h-6 mx-2" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="#881337"></path> <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" fill="#881337"></path> </g></svg>
              <div style={}>{ticket.date}</div>
          </div>
          <div className="flex items-center justify-center my-1">
            {/* SVG location icon code here */}<svg width="40px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#881337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#881337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              <div className="text-m font-bold text-rose-900">{ticket.stops}</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 px-5 pb-5 w-full flex justify-around items-end">
        <div>
          <span className="text-2 font-semibold text-gray-900 dark:text-white">{ticket.price} USD/{ticket.tripType}</span>
          <div className="text-m font-bold text">
            Seats Available: <span className="text-rose-900">{ticket.seats}</span>
          </div>
        </div>
        <svg fill="#881337" width="40px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M490.18,181.4l-44.13-44.13a20,20,0,0,0-27-1,30.81,30.81,0,0,1-41.68-1.6h0A30.81,30.81,0,0,1,375.77,93a20,20,0,0,0-1-27L330.6,21.82a19.91,19.91,0,0,0-28.13,0L232.12,92.16a39.87,39.87,0,0,0-9.57,15.5,7.71,7.71,0,0,1-4.83,4.83,39.78,39.78,0,0,0-15.5,9.58L21.82,302.47a19.91,19.91,0,0,0,0,28.13L66,374.73a20,20,0,0,0,27,1,30.69,30.69,0,0,1,43.28,43.28,20,20,0,0,0,1,27l44.13,44.13a19.91,19.91,0,0,0,28.13,0l180.4-180.4a39.82,39.82,0,0,0,9.58-15.49,7.69,7.69,0,0,1,4.84-4.84,39.84,39.84,0,0,0,15.49-9.57l70.34-70.35A19.91,19.91,0,0,0,490.18,181.4ZM261.81,151.75a16,16,0,0,1-22.63,0l-11.51-11.51a16,16,0,0,1,22.63-22.62l11.51,11.5A16,16,0,0,1,261.81,151.75Zm44,44a16,16,0,0,1-22.62,0l-11-11a16,16,0,1,1,22.63-22.63l11,11A16,16,0,0,1,305.83,195.78Zm44,44a16,16,0,0,1-22.63,0l-11-11a16,16,0,0,1,22.63-22.62l11,11A16,16,0,0,1,349.86,239.8Zm44.43,44.54a16,16,0,0,1-22.63,0l-11.44-11.5a16,16,0,1,1,22.68-22.57l11.45,11.49A16,16,0,0,1,394.29,284.34Z"></path></g></svg>
        {/* Add to cart button or similar action */}
      </div>
      </div>
    </div>
  );
}
