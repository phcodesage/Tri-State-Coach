import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";
import Footer from "../components/Footer";

const HOME: NextPage = () => {
  const onRECTANGLEImageFrameClick = useCallback(() => {
    // Please sync "HOME" to the project
  }, []);

  const onVECTORClick = useCallback(() => {
    // Please sync "HOME" to the project
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.fRAMEWrapper}>
        <div className={styles.fRAME}>
          <header className={styles.rECTANGLE}>
            <img
              className={styles.image2Icon}
              loading="eager"
              alt=""
              src="/image-2@2x.png"
            />
            <div className={styles.frameContactUsFrameWrapper}>
              <div className={styles.frameContactUsFrame}>
                <div className={styles.fRAMEFrameCollegeShuttl}>
                  <div className={styles.home1}>
                    <b className={styles.home2}>HOME</b>
                  </div>
                </div>
                <div className={styles.fRAMEFrameCollegeShuttl1}>
                  <div className={styles.contactUs}>
                    <b className={styles.contactUs1}>SERVICES</b>
                  </div>
                </div>
                <div className={styles.fRAMEFrameCollegeShuttl2}>
                  <div className={styles.collegeShuttles}>
                    <b className={styles.collegeShuttles1}>COLLEGE SHUTTLES</b>
                  </div>
                </div>
                <div className={styles.fRAMEFrameCollegeShuttl3}>
                  <div className={styles.ourBuses}>
                    <b className={styles.ourBuses1}>OUR BUSES</b>
                  </div>
                </div>
                <div className={styles.fRAMEFrameCollegeShuttl4}>
                  <div className={styles.contactUs2}>
                    <b className={styles.contactUs3}>CONTACT US</b>
                  </div>
                </div>
                <div className={styles.frameLuxuryReliableBusFram}>
                  <div
                    className={styles.rECTANGLEImageFrame}
                    onClick={onRECTANGLEImageFrameClick}
                  />
                  <img
                    className={styles.vECTOR}
                    loading="eager"
                    alt=""
                    src="/vector.svg"
                    onClick={onVECTORClick}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className={styles.frameHeaderFrame}>
            <div className={styles.iNSTANCEbuttonFrame}>
              <button className={styles.button}>
                <div className={styles.tEXTEnterYourEmailText} />
                <div className={styles.requestAQuote}>Request a Quote</div>
              </button>
              <div className={styles.tEXTGetNotifiedAboutNew}>
                <div className={styles.tEXTWeDoNotShareYourE} />
                <div className={styles.tEXTWeDoNotShareYourE1} />
                <img
                  className={styles.image39Icon}
                  loading="eager"
                  alt=""
                  src="/image-39@2x.png"
                />
              </div>
              <h1 className={styles.luxuryReliableContainer}>
                <p className={styles.blankLine}>&nbsp;</p>
                <p
                  className={styles.luxuryReliable}
                >{`Luxury & Reliable Coach Bus Services`}</p>
                <p className={styles.blankLine1}>&nbsp;</p>
              </h1>
              <div className={styles.loremIpsumDolorContainer}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit. In erat urna, varius eu orci sed, semper volutpat eros. `}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.collegeframescontainer}>
        <div className={styles.frameParent}>
          <div className={styles.wrapperImg1209Wrapper}>
            <div className={styles.wrapperImg1209}>
              <img
                className={styles.img1209Icon}
                loading="eager"
                alt=""
                src="/img-1209@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.collegeShuttlesParent}>
              <h1 className={styles.collegeShuttles2}>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.collegeShuttles3}>College Shuttles</p>
                <p className={styles.blankLine3}>&nbsp;</p>
              </h1>
              <div className={styles.loremIpsumDolorContainer1}>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ultricies at lectus at suscipit. In erat urna,
                  varius eu orci sed, semper volutpat eros. Cras semper vitae
                  metus nec feugiat.
                </p>
                <p className={styles.blankLine4}>&nbsp;</p>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.collegeBreaks}>College Breaks</b>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frametitleworkhoursWrapper}>
        <div className={styles.frametitleworkhours}>
          <div className={styles.clockiconframe}>
            <div className={styles.textframeworkhours}>
              <div className={styles.locationiconframe}>
                <div className={styles.textframelocation} />
                <div className={styles.quicklinkscontainerframe}>
                  <h1 className={styles.ourNews}>Our News</h1>
                </div>
              </div>
              <div className={styles.footerlinksectionframe}>
                <div className={styles.someOfOur}>some of our latest news</div>
              </div>
            </div>
          </div>
          <div className={styles.newBusInfo}>
            <div className={styles.busTimingFrame}>
              <div className={styles.busTimingFrameChild} />
              <img
                className={styles.newBusesIcon}
                loading="eager"
                alt=""
                src="/rectangle-47@2x.png"
              />
              <div className={styles.readmoreBtn}>
                <div className={styles.companyUpdatesFrame}>
                  <div className={styles.newsletterSubscribe}>
                    <div className={styles.inputEmail}>
                      <div className={styles.newBuses}>{`New Buses `}</div>
                      <div className={styles.loremIpsumDolorContainer2}>
                        <p className={styles.loremIpsumDolor2}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ultricies at lectus at suscipit. In
                          erat urna, varius eu orci sed, semper volutpat eros.
                          Cras semper vitae metus nec feugiat.
                        </p>
                        <p className={styles.blankLine5}>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <b className={styles.readMore}>Read more</b>
                </div>
              </div>
            </div>
            <div className={styles.workHoursFrame}>
              <div className={styles.clockIconFrame}>
                <div className={styles.clockIconFrameChild} />
                <img
                  className={styles.img1209Icon1}
                  alt=""
                  src="/img-1209-1@2x.png"
                />
                <div className={styles.privacyPolicyFrame}>
                  <div className={styles.termsOfServicesFrame}>
                    <div className={styles.faqsFrame}>
                      <div className={styles.companyUpdatesParent}>
                        <div className={styles.companyUpdates}>
                          Company Updates
                        </div>
                        <div className={styles.loremIpsumDolorContainer3}>
                          <p className={styles.loremIpsumDolor3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus ultricies at lectus at suscipit. In
                            erat urna, varius eu orci sed, semper volutpat eros.
                            Cras semper vitae metus nec feugiat.
                          </p>
                          <p className={styles.blankLine6}>&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <b className={styles.readMore1}>Read more</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.busTimingFrame1}>
              <div className={styles.busTimingFrameItem} />
              <img
                className={styles.img1209Icon2}
                alt=""
                src="/img-1209-2@2x.png"
              />
              <div className={styles.busTimingFrameInner}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.busTimingParent}>
                      <div className={styles.busTiming}>Bus Timing</div>
                      <div className={styles.loremIpsumDolorContainer4}>
                        <p className={styles.loremIpsumDolor4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ultricies at lectus at suscipit. In
                          erat urna, varius eu orci sed, semper volutpat eros.
                          Cras semper vitae metus nec feugiat.
                        </p>
                        <p className={styles.blankLine7}>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <b className={styles.readMore2}>Read more</b>
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
