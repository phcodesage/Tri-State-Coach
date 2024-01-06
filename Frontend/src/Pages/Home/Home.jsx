import React, { useState } from 'react';

function Home() {
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const toggleNewsletter = () => {
    setNewsletterOpen(!newsletterOpen);
  };
  return (
    <div className="section_mobile">
<div className="home_special_message_block">
<div className="special_message_text">
Now Serving All of New York, New Jersey, and Connecticut</div></div><div className="nav w-clearfix">
<div className="menu_overlay" style={{display: 'none'}}>
<div className="link_section_parent">
<div className="link_section">
<div className="link_section_heading">
<div className="link_section_line">
</div><div className="book_a_ride_text">
BOOK A RIDE</div></div><div className="nav_link">
<a href="/" aria-current="page" className="link_block_text w-inline-block w--current">
<div className="nav_link_text">
Home<br /></div></a></div><div className="nav_link">
<a href="/college-shuttles" className="link_block_text w-inline-block">
<div className="nav_link_text">
College Shuttles<br /></div></a></div><div className="nav_link">
<a href="/quote" className="link_block_text w-inline-block">
<div className="nav_link_text">
Get A Quote</div></a></div><div className="nav_link">
<a href="/contact-us" className="link_block_text w-inline-block">
<div className="nav_link_text">
Contact Us</div></a></div></div><div className="link_section">
<div className="link_section_heading">
<div className="link_section_line">
</div><div className="about_us_text">
ABOUT&nbsp;US</div></div><div className="nav_link">
<a href="/about-us" className="link_block_text w-inline-block">
<div className="nav_link_text">
Our Buses<br /></div></a></div><div className="nav_link">
<a href="/charter-work" className="link_block_text w-inline-block">
<div className="nav_link_text">
Chartering</div></a></div><div className="nav_link">
<a href="/product/invoice" className="link_block_text w-inline-block">
<div className="nav_link_text">
Pay Invoice</div></a></div><div className="nav_link">
<a href="/services" className="link_block_text w-inline-block">
<div className="nav_link_text">
Services</div></a></div><div className="nav_link secondary">
<a href="/terms-of-service" className="link_block_text w-inline-block">
<div className="nav_link_text secondary">
Terms of Service</div></a></div><div className="nav_link secondary">
<a href="/privacy-policy" className="link_block_text w-inline-block">
<div className="nav_link_text secondary">
Privacy Policy</div></a></div></div></div><div className="menu_action_icons">
<a href="tel:+16315432500" className="link-block w-inline-block">
<div className="menu_phone">
</div></a><a href="#" className="link-block w-inline-block">
<div className="menu_chat">
</div></a><a href="mailto:regencybuses@gmail.com" className="link-block w-inline-block">
<div className="menu_mail">
</div></a><a href="https://goo.gl/maps/AGVfBWNNL3ZGRmVJ9" className="link-block w-inline-block">
<div className="menu__location">
</div></a></div></div><a href="/" aria-current="page" className="logo_link_block w-inline-block w--current">
<img src="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo.png" loading="eager" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75.90625px, 100vw" srcSet="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo-p-500.png 500w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo-p-800.png 800w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo.png 920w" alt="" className="logo" />
</a></div><img src="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo.png" loading="lazy" width="251" sizes="(max-width: 767px) 100vw, 251px" alt="" srcSet="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo-p-500.png 500w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo-p-800.png 800w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/6567d3427c8946c25c6c29a0_Tri-statecoach_logo.png 920w" className="image-13" />
<div className="newsletter_footer z-index-100">
<div data-w-id="b92fc4b6-5b64-600f-2485-2f783bdbbb80" className="newsletter_trigger_hide">
<div className="subscribe_text">
Subscribe</div><div className="down_arrow_icon">
</div></div><div data-w-id="dc77ad21-2cac-f71a-82bc-e1093f437ef6" className="newsletter_trigger_show">
<div className="subscribe_text">
Subscribe</div><div className="up_arrow_icon">
</div></div><div data-w-id="cabe2367-073e-b45f-a7bb-d3993a3955b4" className="newsletter_area">
<div className="newsletter_heading_block">
<h1 className="newsletter_heading">
Join Our Newsletter</h1><div className="newsletter_subheading">
Get notified about new trips</div></div><div className="newsletter_submission_block">
<div id="newslter" className="newsletter_form w-form">
<form id="wf-form-Newsletter-Sign-Up" name="wf-form-Newsletter-Sign-Up" data-name="Newsletter Sign Up" method="get" className="newsletter_form_block" data-wf-page-id="64ee20d843330950bb63e0bc" data-wf-element-id="e9800251-0a2b-5dd8-acae-1643f78b0e38" aria-label="Newsletter Sign Up">
<input type="email" className="newsletter_form_input_field w-input" maxLength={256} name="email" data-name="Email" placeholder="email@email.com" id="email" required="" />
<input type="submit" value="Sign up" data-wait="Please wait..." className="sign_up_button w-button" />
</form><div className="newsletter_success w-form-done" tabIndex={-1} role="region" aria-label="Newsletter Sign Up success">
<div className="newsletter_success_message_block">
<div className="newsletter_success_message">
Thank you! Your email has been securely stored</div><div className="padlock_icon">
</div></div></div><div className="newsletter_error w-form-fail" tabIndex={-1} role="region" aria-label="Newsletter Sign Up failure">
<div className="newsletter_error_message">
Oops! Something went wrong</div></div><div className="duplicatedemail_error">
<div className="newsletter_duplicatedemail_error">
Duplicated email!</div></div></div><div className="newsletter_subscription_mesage_block">
<div className="newsletter_subscription_mesage">
We do not share your email. Unsubscribe anytime</div></div></div></div></div><div className="page_container w-container">
<div className="hero_wrap">
<div className="mobile_hero_wrapper">
<h1 className="hero_heading mobile">
REGENCY&nbsp;BUSES</h1><div className="subheading">
Luxury Reliable Coach Buses</div><div className="mobile_hero_button_group">
<a href="/tickets" className="hero_button_buy w-button">
BUY&nbsp;TICKETS</a><a href="/quote" className="hero_button_buy secondary mobile w-button">
Request a quote</a></div></div><a href="/2023-safety-fitness-rating-regency-buses" className="hero_button_alert w-button">
Read Our 2023 Satisfactory Report</a><div className="hero_content">
<h1 className="hero_heading">
Luxury &amp; Reliable Coach Bus Services</h1><div className="hero_buttons_container">
<a href="/college-shuttles" className="hero_button_buy w-button">
COLLEGE&nbsp;BREAKS</a><a href="/quote" className="hero_button_buy secondary w-button">
request a quote</a></div></div></div></div></div>
  )
}

export default Home