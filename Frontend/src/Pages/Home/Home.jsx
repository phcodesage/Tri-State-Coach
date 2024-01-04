import React from 'react'
import styled from 'styled-components';


const StyledNav = styled.div`
background-color: var(--tri-state-blue);
height: 100vh;
background-color: var(--tri-state-blue);
height: 100vh;
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-between;
align-items: center;
`

const SpecialMessageText = styled.div`
  background-color: rgba(242, 208, 164, 0.42);
  color: var(--white-smoke);
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  font-family: Questrial, sans-serif;
  padding: 5px 0;
`;

const LogoImage = styled.img`


  // Adjust size for smaller screens
  @media (max-width: 768px) {
    width: 70vw;    // Increase the width on smaller screens
  }

  // Further adjustments can be made for different screen sizes
`;

const LogoWrapper = styled.div`
  // ... your styles for logo wrapper ...
`;

function Home() {
  return (
    <StyledNav className="wrapper">
      <SpecialMessageText className="special_message_text">
Now Serving All of New York, New Jersey, and Connecticut</SpecialMessageText>
      <div className='hero-image-div'>
      <LogoWrapper>
      </LogoWrapper>
      </div>

      <div className="hero_content">
        <h1 className="hero_heading">
Luxury &amp; Reliable Coach Bus Services</h1>
        <div className="hero_buttons_container">
          <a href="/college-shuttles" className="hero_button_buy w-button">
COLLEGE&nbsp;BREAKS</a><a href="/quote" className="hero_button_buy secondary w-button">
request a quote</a></div>
      </div>
      
      <div className="newsletter_footer">
<div className="newsletter_trigger_hide">
<div className="subscribe_text">Subscribe</div>
<div className="down_arrow_icon">
</div></div><div className="newsletter_area">
<div className="newsletter_heading_block">
<h1 className="newsletter_heading">Join Our Newsletter</h1>
<div className="newsletter_subheading">Get notified about new trips</div></div>
<div className="newsletter_submission_block">
<div id="newslter" className="newsletter_form w-form">
<form id="Newsletter-Sign-Up" name="Newsletter-Sign-Up" data-name="Newsletter Sign Up" method="get" className="newsletter_form_block">
<input type="email" className="newsletter_form_input_field w-input" maxLength="256" name="email" data-name="Email" placeholder="email@email.com" id="email" required="" />
<input type="submit" value="Sign up" data-wait="Please wait..." className="sign_up_button w-button" />
</form><div className="newsletter_success w-form-done" tabIndex="-1" role="region">
<div className="newsletter_success_message_block">
<div className="newsletter_success_message">
Thank you! Your email has been securely stored</div><div className="padlock_icon">
</div></div></div><div className="newsletter_error w-form-fail" tabIndex="-1" role="region">
<div className="newsletter_error_message">
Oops! Something went wrong</div></div><div className="duplicatedemail_error">
<div className="newsletter_duplicatedemail_error">
Duplicated email!</div></div></div><div className="newsletter_subscription_mesage_block">

<div className="newsletter_subscription_mesage">
We do not share your email. Unsubscribe anytime</div></div></div></div></div>
    </StyledNav>
  )
}

export default Home