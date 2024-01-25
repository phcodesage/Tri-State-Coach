import React from 'react'


function Footer() {
  return (
    <>
       <footer className="self-stretch flex flex-col items-center justify-start max-w-full text-left text-[2.25rem] text-white font-inter">
        <div className="w-[76.06rem] rounded-3xs bg-gray-300 flex flex-row flex-wrap items-start justify-start pt-[1.19rem] px-[1.5rem] pb-[0.81rem] box-border gap-[2.19rem] max-w-full z-[1] mq750:gap-[1.06rem] mq1275:w-[calc(100%_-_40px)]">
          <div className="h-[7.31rem] w-[76.06rem] relative rounded-3xs bg-gray-300 hidden max-w-full" />
          <div className="w-[23rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <h2 className="m-0 self-stretch h-[2.75rem] relative text-inherit font-bold font-inherit inline-block z-[2] mq450:text-[1.38rem] mq750:text-[1.81rem]">
                Join Our Newsletter
              </h2>
              <b className="w-[14.38rem] relative text-[1rem] inline-block font-palatino-linotype text-transparent !bg-clip-text [background:linear-gradient(148.81deg,_#fff,_#908345)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center z-[2]">
                Get notified about new tips
              </b>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[0.75rem] min-w-[31.13rem] max-w-full text-center text-[1rem] font-palatino-linotype mq750:flex-wrap mq750:min-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem] max-w-full">
              <input
                className="w-full [border:none] [outline:none] bg-white self-stretch h-[3.88rem] rounded-3xs flex flex-row items-center justify-start py-[1.19rem] px-[1.44rem] box-border font-inter font-medium text-[1.25rem] text-darkgray min-w-[15.63rem] z-[2]"
                placeholder="Enter your email"
                type="text"
              />
              <div className="w-[24.69rem] flex flex-row items-start justify-start py-[0rem] px-[0.25rem] box-border max-w-full">
                <b className="flex-1 relative inline-block text-transparent !bg-clip-text [background:linear-gradient(148.81deg,_#fff,_#908345)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full z-[2]">
                  We do not share your email.Unsubscribe anytime
                </b>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[1rem] pb-[1.06rem] pr-[4.13rem] pl-[3.94rem] bg-darkkhaki rounded-3xs flex flex-row items-center justify-center z-[2] hover:bg-darkolivegreen">
              <div className="h-[3.88rem] w-[15.38rem] relative rounded-3xs bg-darkkhaki hidden" />
              <b className="h-[1.81rem] relative text-[1.5rem] inline-block font-inter text-white text-center z-[3] mq450:text-[1.19rem]">
                Subscribe
              </b>
            </button>
          </div>
        </div>
        <div className="self-stretch h-[27.06rem] bg-brown-200 flex flex-row items-end justify-end py-[4.63rem] px-[2.94rem] box-border relative max-w-full mt-[-3.62rem] text-center text-[1.25rem] mq450:pt-[4.63rem] mq450:pb-[3rem] mq450:box-border mq1100:pl-[1.44rem] mq1100:pr-[1.44rem] mq1100:box-border">
          <div className="h-[27.06rem] w-[80rem] relative bg-brown-200 hidden max-w-full z-[0]" />
          <div className="h-[13.38rem] w-[50rem] relative max-w-full">
            <div className="absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start gap-[0.88rem]">
              <div className="relative font-medium z-[1] mq450:text-[1rem]">
                Other Pages
              </div>
              <div className="relative font-light z-[1] mq450:text-[1rem]">
                Home
              </div>
              <div className="relative font-light z-[1] mq450:text-[1rem]">
                Services
              </div>
              <div className="relative font-light z-[1] mq450:text-[1rem]">
                Buses
              </div>
              <div className="relative font-light z-[1] mq450:text-[1rem]">
                Contact Us
              </div>
              <div className="relative font-light z-[1] mq450:text-[1rem]">
                Chartering
              </div>
            </div>
            <div className="absolute top-[0rem] left-[30.88rem] flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.88rem]">
              <div className="relative font-medium z-[1] mq450:text-[1rem]">
                Work Hours
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                <div className="flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.06rem] gap-[1.75rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                    loading="eager"
                    alt=""
                    src="/mdiclockoutline.svg"
                  />
                  <img
                    className="w-[1.31rem] h-[1.31rem] relative z-[1]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.19rem]">
                    <img
                      className="h-[1.5rem] w-[1.06rem] relative z-[1]"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[1.63rem]">
                  <div className="relative font-light z-[1] mq450:text-[1rem]">
                    8 AM-7 PM , Monday -Friday
                  </div>
                  <div className="relative font-light whitespace-nowrap z-[1] mq450:text-[1rem]">
                    +92-659-65-0
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.38rem]">
                    <div className="relative font-light z-[1] mq450:text-[1rem]">
                      Mumbai , India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[10.19rem] w-[49rem] absolute my-0 mx-[!important] top-[7.5rem] left-[3.31rem]">
            <div className="absolute top-[1.56rem] left-[38.06rem] flex flex-col items-start justify-start gap-[0.88rem]">
              <div className="relative font-medium z-[1] mq450:text-[1rem]">
                Quick Links
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.44rem]">
                <div className="relative font-light z-[1] mq450:text-[1rem]">
                  Privacy Policy
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.44rem]">
                <div className="relative font-light z-[1] mq450:text-[1rem]">
                  Terms of Services
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.44rem]">
                <div className="relative font-light z-[1] mq450:text-[1rem]">
                  FAQs
                </div>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[19.81rem] h-[9.88rem] flex flex-col items-start justify-start gap-[1.38rem] text-[4rem]">
              <h1 className="m-0 w-[16.56rem] flex-1 relative text-inherit font-bold font-palatino-linotype text-transparent !bg-clip-text [background:linear-gradient(148.81deg,_#fff,_#908345)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[1] mq450:text-[2.38rem] mq750:text-[3.19rem]">
                Tri-State
              </h1>
              <div className="w-[15.56rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border text-[1.25rem]">
                <b className="relative tracking-[0.2em] z-[1] mq450:text-[1rem]">
                  COACH
                </b>
              </div>
              <div className="self-stretch h-[2.38rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.44rem] box-border text-left text-[1rem]">
                <div className="self-stretch flex-1 relative z-[1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer