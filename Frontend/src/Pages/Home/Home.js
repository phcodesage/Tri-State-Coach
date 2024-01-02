import React from 'react'
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';

const StyledNav = styled.div`
background-color: var(--tri-state-blue);
height: 100vh;
background-color: var(--tri-state-blue);
height: 100vh;
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-around;
align-items: center;
`
function Home() {
  const TristateLogo = 'tri-state-coach-logo.png'
  return (
    <StyledNav className="wrapper">

      <div className="special_message_text">
Now Serving All of New York, New Jersey, and Connecticut</div>
      <Nav />
      <div className='hero-image-div'>
        <img src='/tri-state-coach-logo.png' alt='tri-state-coach-logo'/>
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
</div></div>
<div data-w-id="dc77ad21-2cac-f71a-82bc-e1093f437ef6" className="newsletter_trigger_show">
<div className="subscribe_text">Subscribe</div><div className="up_arrow_icon">
</div></div><div data-w-id="cabe2367-073e-b45f-a7bb-d3993a3955b4" className="newsletter_area">
<div className="newsletter_heading_block">
<h1 className="newsletter_heading">Join Our Newsletter</h1>
<div className="newsletter_subheading">Get notified about new trips</div></div>
<div className="newsletter_submission_block">
<div id="newslter" className="newsletter_form w-form">
<form id="wf-form-Newsletter-Sign-Up" name="wf-form-Newsletter-Sign-Up" data-name="Newsletter Sign Up" method="get" className="newsletter_form_block" data-wf-page-id="64ee20d843330950bb63e0bc" data-wf-element-id="e9800251-0a2b-5dd8-acae-1643f78b0e38" aria-label="Newsletter Sign Up" >
<input type="email" className="newsletter_form_input_field w-input" maxLength="256" name="email" data-name="Email" placeholder="email@email.com" id="email" required="" />
<input type="submit" value="Sign up" data-wait="Please wait..." className="sign_up_button w-button" />
</form><div className="newsletter_success w-form-done" tabIndex="-1" role="region" aria-label="Newsletter Sign Up success">
<div className="newsletter_success_message_block">
<div className="newsletter_success_message">
Thank you! Your email has been securely stored</div><div className="padlock_icon">
</div></div></div><div className="newsletter_error w-form-fail" tabIndex="-1" role="region" aria-label="Newsletter Sign Up failure">
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