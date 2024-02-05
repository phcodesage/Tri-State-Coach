import { Link } from 'react-router-dom';
import CollegeShuttles from "./CollegeShuttles/CollegeShuttles";
import TriStateCoachLogo from '../assets/Tri-state Coach.png'
const HamburgerMenu = () => (
<svg width="87" height="104" viewBox="0 0 87 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3172_1196)">
<rect y="-1" width="88" height="89" fill="#A13D3D"/>
<path d="M32 34H56M36.5 43H56M41 52H56" stroke="#F8F5EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3172_1196">
<rect width="88" height="89" fill="white" transform="translate(0 -1)"/>
</clipPath>
</defs>
</svg>


)

function Hero() {
  return (
    <div>
    <header className="flex flex-col pl-7 w-full max-md:pl-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full text-base font-bold text-center text-gray-800 max-md:flex-wrap max-md:max-w-full">
          <Link to="/">
            <img src={TriStateCoachLogo} className="p-2 max-w-full aspect-[1.1] w-[118px]" />
          </Link>
          <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <Link to="/home" className="max-md:mt-10">HOME</Link>
            <Link to="/services" className="max-md:mt-10">SERVICES</Link>
            <Link to="/college-shuttles" className="flex-auto  max-md:mt-10">COLLEGE SHUTTLES</Link>
            <Link to="/our-buses" className="max-md:mt-10">OUR BUSES</Link>
            <Link to="/contact-us" className="flex-auto  max-md:mt-10">CONTACT US</Link>
            <Link to="/menu">
              <HamburgerMenu className="self-stretch aspect-[0.83] w-[87px]" />
            </Link>
          </div>
        </div>
      <section className="mt-36 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:max-w-full">
              <h1 className="max-md:max-w-full max-md:text-4xl" style={{"width":"644px","height":"156px","left":"0px","top":"50px","fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"700","fontSize":"48px","lineHeight":"58px","color":"#000000"}}>
                <br /> Luxury & Reliable Coach Bus Services <br /> <br />
              </h1>
              <p className="mt-14 text-xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies at lectus at suscipit. In erat urna, varius
                eu orci sed, semper volutpat eros. <br />
              </p>
              <Link 
                to="/quote"
                className="justify-center self-start px-12 py-6 mt-9 whitespace-nowrap rounded-xl max-md:px-5" style={{"fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"400","fontSize":"24px","lineHeight":"29px","textAlign":"center","color":"#000000", "background":"#EAE2BF"}}
                aria-label="Request a Quote"
                role="button"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-12 pl-14 mt-14 w-full bg-orange-200 bg-opacity-40 rounded-[1000px] max-md:mt-10 max-md:max-w-full">
              
              <div className="flex z-10 flex-col justify-center items-end pl-16 mt-0 rounded-[1000px] max-md:pl-5 max-md:max-w-full" style={{backgroundColor: '908345'}}>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd349cac0cfdd13a7ad34b633c0976bc7be6f6c31be26df1751d39222737fb2c?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&"className="z-10 mt-0 mb-0 max-w-full aspect-[1.15] w-[554px] max-md:mb-2.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    <CollegeShuttles />
    </div>
  );
}

export default Hero;