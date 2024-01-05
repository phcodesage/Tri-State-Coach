import React from 'react'

function ContactUs() {
  return (
    <div className="page_container w-container">
<div className="body_section">
<h2 className="page_heading">
Send us a message</h2><div className="contact_body_section">
<div className="contact_form w-form">
<form id="wf-form-Contact" name="wf-form-Contact" data-name="Contact" method="get" className="contact_form_container w-clearfix" data-wf-page-id="64ee20d843330950bb63e118" data-wf-element-id="bf7d3441-45ad-1f11-9cd1-82d7b9ef5edb" aria-label="Contact">
<div className="full_field_container">
<label htmlFor="Name" className="form_field_label">
Name</label><input type="text" className="form_input_field w-input" autoFocus={true} maxLength="256" name="Name" data-name="Name" placeholder="Full Name" id="Name" required="" />
</div><div className="full_field_container">
<label htmlFor="Email" className="form_field_label">
Email</label><input type="email" className="form_input_field w-input" maxLength="256" name="Email" data-name="Email" placeholder="email@email.com" id="Email" required="" />
</div><div className="full_field_container">
<label htmlFor="Message" className="form_field_label">
Message</label><textarea id="Message" name="Message" maxLength="5000" data-name="Message" placeholder="Leave us a message..." required="" className="form_input_field_long w-input">
</textarea></div><input type="submit" value="Submit" data-wait="Please wait..." className="form_submit_button_reg w-button" />
</form><div className="success-message-2 w-form-done" tabIndex="-1" role="region" aria-label="Contact success">
<div>Thank you! Your submission has been sent!</div></div><div className="error-message-2 w-form-fail" tabIndex="-1" role="region" aria-label="Contact failure">
<div className="text-block-17">
Oops! Something went wrong while submitting the form.</div></div></div><div className="regency_details">
<div className="contact_details_col1">
<div className="contact_name">
TRI-STATE COACH</div><a href="https://www.facebook.com/regency.buses/" className="w-inline-block">
<div className="facebook_icon">
</div></a></div><div className="contact_number_email">
38 Southern Blvd. Ste 5<br />Nesconset NY 11767</div><div className="contact_number_email">
(631) 543 2500<br />tristatecoachbus<br />@gmail.com</div></div></div><div className="copyright_block">
<div className="copyright_icon">
</div><div className="text-block-16">
TRI-STATE COACH 2023</div></div></div></div>
  )
}

export default ContactUs