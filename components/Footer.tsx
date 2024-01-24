import React from 'react'
import styles from "./index.module.css";

function Footer() {
  return (
    <>
        <footer className={styles.busInfo}>
        <div className={styles.homePage}>
          <div className={styles.homePageChild} />
          <div className={styles.contactUsFrame}>
            <div className={styles.charteringFrame}>
              <h2 className={styles.joinOurNewsletter}>Join Our Newsletter</h2>
              <b className={styles.getNotifiedAbout}>
                Get notified about new tips
              </b>
            </div>
          </div>
          <div className={styles.subscribeButton}>
            <div className={styles.newsletterSubscription}>
              <input
                className={styles.otherPagesLink}
                placeholder="Enter your email"
                type="text"
              />
              <div className={styles.clockIcon}>
                <b className={styles.weDoNot}>
                  We do not share your email.Unsubscribe anytime
                </b>
              </div>
            </div>
            <button className={styles.readMoreButton}>
              <div className={styles.readMoreButtonChild} />
              <b className={styles.subscribe}>Subscribe</b>
            </button>
          </div>
        </div>
        <div className={styles.termsOfServicesFrame1}>
          <div className={styles.termsOfServicesFrameChild} />
          <div className={styles.fAQsFrame}>
            <div className={styles.quickLinksSection}>
              <div className={styles.otherPages}>Other Pages</div>
              <div className={styles.home3}>Home</div>
              <div className={styles.services}>Services</div>
              <div className={styles.buses}>Buses</div>
              <div className={styles.contactUs4}>Contact Us</div>
              <div className={styles.chartering}>Chartering</div>
            </div>
            <div className={styles.mumbaiCityIcon}>
              <div className={styles.workHours}>Work Hours</div>
              <div className={styles.workHoursFrame1}>
                <div className={styles.mondayToFridayText}>
                  <img
                    className={styles.mdiclockOutlineIcon}
                    loading="eager"
                    alt=""
                    src="/mdiclockoutline.svg"
                  />
                  <img
                    className={styles.amPmLabel}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className={styles.vectormonth}>
                    <img
                      className={styles.locationLabelIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div className={styles.workHoursFrameContent}>
                  <div className={styles.am7Pm}>8 AM-7 PM , Monday -Friday</div>
                  <div className={styles.mumbaiText}>+92-659-65-0</div>
                  <div className={styles.mumbaiLocationInfo}>
                    <div className={styles.mumbaiIndia}>Mumbai , India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.quickLinksFrame}>
            <div className={styles.triStateText}>
              <div className={styles.quickLinks}>Quick Links</div>
              <div className={styles.privacyTermsFaqContainer}>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
              </div>
              <div className={styles.privacyTermsFaqContainer1}>
                <div className={styles.termsOfServices}>Terms of Services</div>
              </div>
              <div className={styles.privacyTermsFaqContainer2}>
                <div className={styles.faqs}>FAQs</div>
              </div>
            </div>
            <div className={styles.coachText}>
              <h1 className={styles.triState}>Tri-State</h1>
              <div className={styles.designBackgroundFrame}>
                <b className={styles.coach}>COACH</b>
              </div>
              <div className={styles.faqTitleText}>
                <div className={styles.loremIpsumDolor5}>
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