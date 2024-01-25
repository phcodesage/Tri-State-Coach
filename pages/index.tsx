import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const HOME: NextPage = () => {
  const onOurBusesFrameClick = useCallback(() => {
    // Please sync "HOME" to the project
  }, []);

  const onVectorIconClick = useCallback(() => {
    // Please sync "HOME" to the project
  }, []);

  return (
    <div className="w-full relative bg-ivory overflow-hidden flex flex-col items-end justify-start gap-[8.75rem] tracking-[normal] mq450:gap-[2.19rem] mq750:gap-[4.38rem]">
      <section className="self-stretch h-[44.31rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border max-w-full text-left text-[3rem] text-black font-inter">
        <div className="w-[93.44rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.63rem] box-border gap-[5.06rem] max-w-[119%] shrink-0 mq450:gap-[1.25rem] mq750:gap-[2.5rem] mq750:pb-[1.69rem] mq750:box-border">
          <header className="w-[79.63rem] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full text-center text-[1rem] text-gray-300 font-palatino-linotype">
            <img
              className="h-[4.88rem] w-[7.38rem] relative object-cover"
              loading="eager"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="w-[52.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                <div className="w-[3.31rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <Link href="/home">
<b className="flex-1 relative [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
                      HOME
                    </b> </Link>
                  </div>
                </div>
                <div className="w-[6.81rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <Link href="/services">
<b className="w-[5.06rem] relative inline-block [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
                      SERVICES
                    </b></Link>
                  </div>
                </div>
                <div className="w-[10.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <Link href="/college-shuttles">
<b className="flex-1 relative [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
                      COLLEGE SHUTTLES
                    </b></Link>
                  </div>
                </div>
                <div className="w-[5.88rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <Link href="/our-buses">
<b className="flex-1 relative [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
                      OUR BUSES
                    </b></Link>
                  </div>
                </div>
                <div className="w-[7.69rem] flex flex-col items-start justify-start pt-[0rem] pb-[1.25rem] pr-[0.88rem] pl-[0rem] box-border">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <Link href="/contact-us">
<b className="flex-1 relative [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
                      CONTACT US
                    </b></Link>
                  </div>
                </div>
                <div className="h-[5.56rem] w-[5.5rem] relative">
                  <div
                    className="absolute top-[0rem] left-[0rem] bg-brown-200 w-full h-full cursor-pointer"
                    onClick={onOurBusesFrameClick}
                  />
                  <img
                    className="absolute top-[2.19rem] left-[2rem] w-[1.5rem] h-[1.13rem] cursor-pointer z-[1]"
                    loading="eager"
                    alt=""
                    src="/vector.svg"
                    onClick={onVectorIconClick}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.13rem] box-border max-w-full">
            <div className="h-[30.13rem] flex-1 relative max-w-full">
              <button className="cursor-pointer [border:none] pt-[1.13rem] px-[1.13rem] pb-[1.19rem] bg-[transparent] absolute top-[23.38rem] left-[0rem] rounded-3xs w-[17.75rem] flex flex-row items-center justify-center box-border whitespace-nowrap">
                <div className="w-full absolute my-0 mx-[!important] h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs bg-blanchedalmond" />
                <div className="relative text-[1.5rem] font-inter text-black text-center z-[1]">
                  Request a Quote
                </div>
              </button>
              <div className="absolute h-full top-[0rem] bottom-[0rem] left-[33.06rem] w-[58.25rem]">
                <div className="absolute top-[10.69rem] left-[0rem] rounded-981xl bg-wheat w-[55rem] h-[19.44rem]" />
                <div className="absolute top-[6.56rem] left-[3.25rem] rounded-981xl bg-darkkhaki w-[55rem] h-[19.44rem] z-[1]" />
                <img
                  className="absolute h-full top-[0rem] bottom-[0rem] left-[8.5rem] max-h-full w-[39.81rem] object-cover z-[2]"
                  loading="eager"
                  alt=""
                  src="/image-39@2x.png"
                />
              </div>
              <h1 className="m-0 absolute top-[3.13rem] left-[0rem] text-inherit font-bold font-inherit inline-block w-[40.25rem] h-[9.75rem] z-[2] mq450:text-[1.81rem] mq750:text-[2.38rem]">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`Luxury & Reliable Coach Bus Services`}</p>
                <p className="m-0">&nbsp;</p>
              </h1>
              <div className="absolute top-[16.88rem] left-[0rem] text-[1.25rem] text-gray-200 inline-block w-[33.06rem] h-[4.19rem] z-[2] mq450:text-[1rem]">
                <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit. In erat urna, varius eu orci sed, semper volutpat eros. `}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.31rem] pl-[0rem] box-border min-h-[30.5rem] max-w-full text-left text-[3rem] text-black font-inter">
        <div className="flex-1 flex flex-row items-start justify-start gap-[4.5rem] max-w-full mq450:gap-[1.13rem] mq750:gap-[2.25rem] mq1100:flex-wrap">
          <div className="h-[28.63rem] w-[37.38rem] flex flex-col items-start justify-start pt-[1.63rem] px-[0rem] pb-[0rem] box-border min-w-[37.38rem] max-w-full mq750:min-w-full mq1100:flex-1">
            <div className="self-stretch flex-1 relative rounded-[20px] flex items-center justify-center">
              <img
                className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-contain absolute left-[0rem] top-[0.31rem] w-full h-full [transform:scale(1.093)] mq1100:self-stretch mq1100:w-auto"
                loading="eager"
                alt=""
                src="/img-1209@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.06rem] min-w-[24.88rem] max-w-full mq450:min-w-full mq750:gap-[1.5rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.81rem] max-w-full">
              <h1 className="m-0 w-[26.88rem] h-[7.63rem] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full pr-[1.25rem] mq450:text-[1.81rem] mq750:text-[2.38rem]">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">College Shuttles</p>
                <p className="m-0">&nbsp;</p>
              </h1>
              <div className="self-stretch h-[6.75rem] relative text-[1.25rem] text-gray-200 inline-block shrink-0 mq450:text-[1rem]">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ultricies at lectus at suscipit. In erat urna,
                  varius eu orci sed, semper volutpat eros. Cras semper vitae
                  metus nec feugiat.
                </p>
                <p className="m-0">&nbsp;</p>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[1.19rem] px-[1.13rem] pb-[1.13rem] bg-darkred w-[17.31rem] rounded-3xs flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-brown-100">
              <div className="h-[4.13rem] w-[17.31rem] relative rounded-3xs bg-darkred hidden" />
              <Link href="/college-shuttles">
<b className="relative text-[1.5rem] font-inter text-white text-center z-[1]">
                College Breaks
              </b></Link>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.38rem] box-border max-w-full text-center text-[3rem] text-black font-inter">
        <div className="flex-1 flex flex-col items-center justify-start gap-[4.56rem] max-w-full mq450:gap-[1.13rem] mq750:gap-[2.25rem]">
          <div className="w-[26.94rem] flex flex-row items-start justify-start max-w-full">
            <div className="w-[21.5rem] flex flex-col items-end justify-start gap-[0.31rem] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px]">
                <div className="h-[0.19rem] w-[5.94rem] relative box-border z-[1] border-t-[3px] border-solid border-brown-200" />
                <div className="flex-1 flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border min-w-[10.25rem]">
                  <h1 className="m-0 self-stretch h-[3.63rem] relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-[1.81rem] mq750:text-[2.38rem]">
                    Our News
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[1.5rem] text-[1.25rem] text-gray-200">
                <div className="relative mq450:text-[1rem]">
                  some of our latest news
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[2.25rem] max-w-full grid-cols-[repeat(3,_minmax(293px,_1fr))] text-left text-[1.5rem] font-roboto mq750:gap-[1.13rem] mq750:grid-cols-[minmax(293px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(293px,_508px))]">
            <div className="rounded-3xs bg-gray-100 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.17)] flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.94rem] box-border gap-[1.75rem] max-w-full">
              <div className="self-stretch relative rounded-3xs bg-gray-100 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.17)] h-[32.88rem] hidden" />
              <img
                className="self-stretch h-[16rem] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-47@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.81rem] pl-[1.13rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-end justify-start gap-[2.81rem] max-w-full mq450:gap-[1.38rem]">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.06rem] pl-[0rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.13rem] max-w-full">
                      <div className="w-[8.63rem] h-[1.75rem] relative inline-block z-[1] mq450:text-[1.19rem]">{`New Buses `}</div>
                      <div className="self-stretch h-[6.75rem] relative text-[1rem] font-inter text-gray-200 inline-block shrink-0 z-[1]">
                        <p className="m-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ultricies at lectus at suscipit. In
                          erat urna, varius eu orci sed, semper volutpat eros.
                          Cras semper vitae metus nec feugiat.
                        </p>
                        <p className="m-0">&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/read-more">
<b className="relative [text-decoration:underline] text-brown-200 z-[1] mq450:text-[1.19rem]">
                    Read more
                  </b></Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.31rem] pl-[0rem] box-border max-w-full">
              <div className="self-stretch rounded-3xs bg-gray-100 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.17)] flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.94rem] box-border gap-[2rem] max-w-full mq450:gap-[1rem]">
                <div className="self-stretch relative rounded-3xs bg-gray-100 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.17)] h-[32.88rem] hidden" />
                <img
                  className="self-stretch h-[15.75rem] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/img-1209-1@2x.png"
                />
                <div className="w-[23.25rem] flex flex-row items-start justify-start py-[0rem] px-[0.63rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[2.75rem] max-w-full mq450:gap-[1.38rem]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.88rem] pl-[0rem] box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.19rem] max-w-full">
                        <div className="relative z-[1] mq450:text-[1.19rem]">
                          Company Updates
                        </div>
                        <div className="self-stretch h-[6.75rem] relative text-[1rem] font-inter text-gray-200 inline-block shrink-0 z-[1]">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus ultricies at lectus at suscipit. In
                            erat urna, varius eu orci sed, semper volutpat eros.
                            Cras semper vitae metus nec feugiat.
                          </p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/read-more">
<b className="relative [text-decoration:underline] text-brown-200 z-[1] mq450:text-[1.19rem]">
                      Read more
                    </b></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xs bg-gray-100 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.17)] flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.94rem] box-border gap-[2rem] max-w-full mq450:gap-[1rem]">
              <div className="self-stretch relative rounded-3xs bg-gray-100 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.17)] h-[32.88rem] hidden" />
              <img
                className="self-stretch h-[15.75rem] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                alt=""
                src="/img-1209-2@2x.png"
              />
              <div className="w-[23.38rem] flex flex-row items-start justify-start py-[0rem] px-[0.75rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-end justify-start gap-[2.69rem] max-w-full mq450:gap-[1.31rem]">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                      <div className="w-[20rem] relative inline-block z-[1] mq450:text-[1.19rem]">
                        Bus Timing
                      </div>
                      <div className="self-stretch h-[6.75rem] relative text-[1rem] font-inter text-gray-200 inline-block shrink-0 z-[1]">
                        <p className="m-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ultricies at lectus at suscipit. In
                          erat urna, varius eu orci sed, semper volutpat eros.
                          Cras semper vitae metus nec feugiat.
                        </p>
                        <p className="m-0">&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/read-more">
<b className="relative [text-decoration:underline] text-brown-200 z-[1] mq450:text-[1.19rem]">
                    Read more
                  </b></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HOME;
