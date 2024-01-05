import React, { useState } from 'react';

const NewsletterFooter = () => {
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);

  const toggleNewsletter = () => {
    setIsNewsletterVisible(!isNewsletterVisible);
  };

  return (
    <div className="newsletter_footer z-50">
      {!isNewsletterVisible && (
        <div className="newsletter_trigger_hide flex cursor-pointer" onClick={toggleNewsletter}>
          <div className="subscribe_text">Subscribe</div>
          <div className="down_arrow_icon"></div>
        </div>
      )}

      {isNewsletterVisible && (
        <div className="newsletter_trigger_show flex cursor-pointer" onClick={toggleNewsletter}>
          <div className="subscribe_text">Subscribe</div>
          <div className="up_arrow_icon"></div>
        </div>
      )}

      {isNewsletterVisible && (
        <div className="newsletter_area flex">
          <div className="newsletter_heading_block">
            <h1 className="newsletter_heading">Join Our Newsletter</h1>
            <div className="newsletter_subheading">Get notified about new trips</div>
          </div>
          <div className="newsletter_submission_block">
            <div className="newsletter_form">
              <form className="newsletter_form_block" aria-label="Newsletter Sign Up">
                <input type="email" className="newsletter_form_input_field" maxLength="256" name="email" placeholder="email@email.com" required />
                <input type="submit" value="Sign up" className="sign_up_button" />
              </form>
              <div className="newsletter_success_message_block">
                <div className="newsletter_success_message">Thank you! Your email has been securely stored</div>
                <div className="padlock_icon"></div>
              </div>
              <div className="newsletter_error_message">Oops! Something went wrong</div>
              <div className="newsletter_duplicatedemail_error">Duplicated email!</div>
            </div>
            <div className="newsletter_subscription_mesage_block">
              <div className="newsletter_subscription_mesage">We do not share your email. Unsubscribe anytime</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterFooter;
