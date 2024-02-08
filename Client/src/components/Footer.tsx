
export default function Footer() {
  return (
    <>
    
    <header className="relative px-14 py-12 w-full max-md:px-5 max-md:max-w-full" style={{"background":"#A13D3D"}}>
      <div style={{"position":"absolute","width":"1217px","height":"117px","left":"calc(50% - 1217px/2 + 0.5px)","top":"0px","background":"#192636","borderRadius":"10px"}}></div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <section className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col self-stretch my-auto font-bold max-md:mt-10">
            <h1 className=" bg-clip-text max-md:text-4xl text-center" style={{"fontFamily":"'Palatino Linotype'","fontStyle":"normal","fontWeight":"700","fontSize":"64px","lineHeight":"86px","background":"linear-gradient(148.81deg, #FFFFFF 18.86%, #908345 141.54%)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent","backgroundClip":"text","textFillColor":"transparent"}}>Tri-State</h1>
            <div className="self-center mt-5 text-xl  text-white tracking-[4px]">
              COACH
            </div>
            <p className="mt-8 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </header>
        </section>
        <nav className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 text-xl font-light text-white whitespace-nowrap max-md:mt-10">
            <h2 className="font-medium">Other Pages</h2>
            <a href="#" className="mt-5">
              Home
            </a>
            <a href="#" className="mt-6">
              Services
            </a>
            <a href="#" className="mt-6">
              Buses
            </a>
            <a href="#" className="mt-6">
              Contact Us
            </a>
            <a href="#" className="mt-6">
              Chartering
            </a>
          </div>
        </nav>
        <section className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-xl font-light  text-white max-md:mt-10">
            <h2 className="font-medium">Quick Links</h2>
            <a href="#" className="mt-6">
              Privacy Policy
            </a>
            <a href="#" className="mt-5 whitespace-nowrap">
              Terms of Services
            </a>
            <a href="#" className="mt-6">
              FAQs
            </a>
          </div>
        </section>
        <section className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-xl font-light  text-white max-md:mt-10">
            <h2 className="font-medium">Work Hours</h2>
            <div className="flex gap-3.5 justify-between mt-5 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7e24fe5e00a74e9218e813ff76d5c156b7155e6a61284b3e86546541438f8e?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&"
                className="w-6 aspect-square"
                alt="Clock"
              />
              <div className="grow">8 AM-7 PM , Monday -Friday</div>
            </div>
            <div className="flex gap-3.5 justify-between mt-7 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b518390834448c6bce6ad5c6d5aa495f5a211559376cea1d069df61772527cd?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&"
                className="aspect-square fill-orange-100 w-[21px]"
                alt="Phone"
              />
              <div className="flex-auto">+92-659-65-0</div>
            </div>
            <div className="flex gap-5 justify-between mt-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e10eae827551294c4386b90753e528973ddc69d64fc61124f2f6724c57baafc?apiKey=0c561be43c1e4fe4bc6ddc537f498e85&"
                className="aspect-[0.71] fill-orange-100 w-[17px]"
                alt="Location"
              />
              <div className="flex-auto">Mumbai , India</div>
            </div>
          </div>
        </section>
      </div>
    </header>
    </>
  );
}