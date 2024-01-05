import React from 'react'

function GetAQuote() {
  const ClearStop1 = () => {
    // Implementation of what ClearStop1 should do
};
const ClearStop2 = () => {
  // Implementation of what ClearStop1 should do
};
const ClearStop3 = () => {
  // Implementation of what ClearStop1 should do
};
const ClearAll = () => {
  // Implementation of what ClearStop1 should do
};
const ClearResetReturn = () => {
  // Implementation of what ClearStop1 should do
};
  return (
    <div className="page_container w-container">
<div className="body_section">
<h2 className="page_heading">
Get a Quote</h2><div className="form-block w-form">
<form id="wf-form-Quote" name="wf-form-Quote" data-name="Quote" method="get" className="form" data-wf-page-id="64ee20d843330950bb63e12c" data-wf-element-id="e0ac354a-9cad-d0d4-015d-828d8fb45464" aria-label="Quote">
<div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="5" data-duration="500" data-infinite="false" role="region" aria-label="carousel">
<div className="mask w-slider-mask" id="w-slider-mask-0">
<div className="slide w-slide" aria-label="1 of 3" role="group" style={{transform: 'translateX(0px)', opacity: 1, transition: 'transform 500ms ease 0s'}}>
<div className="form_slide_container">
<h3 className="form_slide_heading">
Route Details</h3><div className="full_field_container">
<label htmlFor="Destination" className="form_field_label">
Destination</label><input type="text" className="form_input_field w-input" autoFocus={true} maxLength="256" name="Destination" data-name="Destination" placeholder="Please enter an address" id="Destination" />
</div><div className="full_field_container">
<label htmlFor="Pick-up-Location" className="form_field_label">
Pick-up Location</label><input type="text" className="form_input_field w-input" maxLength="256" name="Pick-up-Location" data-name="Pick-up Location" placeholder="Please enter an address" id="Pick-up-Location" />
</div><div className="date_time_container">
<div className="depart_arrive_picker">
<div className="radial_options_track">
<div className="radial_button_group">
<label className="radio_button_container w-radio">
<div className="w-form-formradioinput w-form-formradioinput--inputType-custom radial_button_selector w-radio-input">
</div><input type="radio" id="Depart-At" name="Depart-Time-Type" value="Depart At" data-name="Depart Time Type" style={{opacity:0, position:'absolute',zIndex:-1}} />
<span className="radio-button-label w-form-label" htmlFor="Depart-At" >
Depart at:</span></label><label className="radio_button_container w-radio">
<div className="w-form-formradioinput w-form-formradioinput--inputType-custom radial_button_selector w-radio-input">
</div><input type="radio" id="Arrive-By" name="Depart-Time-Type" value="Arrive By" data-name="Depart Time Type" style={{opacity:0,position:'absolute', zIndex:-1}} />
<span id="depart-arrive-by" className="radio-button-label w-form-label" htmlFor="Arrive-By">
Arrive by:</span></label></div></div></div><div className="date_time_picker">
<div className="half_field_container">
<label htmlFor="email-3" className="form_field_label">
Date</label><div className="w-embed">
<input name="Departure Date" type="date" className="form_input_field" requried="" />
</div></div><div className="half_field_container">
<label htmlFor="Time" className="form_field_label">
Time</label><div className="w-embed">
<input name="Departure Time" type="time" className="form_input_field" requried="" />
</div></div></div></div><div className="optional_form_category_container">
<div data-w-id="f94fe280-b29b-8662-79df-9a0190de3e6b" className="optional_form_category_button">
<div className="plus_icon">
</div><div className="optional_category_add">
Add Stop</div></div><div data-w-id="cc45b585-b367-007a-2cd0-58be8f9e97a4" className="form_interaction_button w-embed">
<div className="collapse_clear_button" onClick={ClearAll()}>

	<div className="optional_form_category_button">

		<div className="minus_icon">
</div>
		<div className="optional_category_remove">
Remove All Stops</div>
  </div>  
</div></div><div data-w-id="7414be0c-aa60-0596-3b75-a55b4fa364a1" className="full_field_container_removable">
<label htmlFor="Pick-up-Location-2" className="form_field_label">
Stop 1</label><div className="clearable_input_field w-clearfix">
<input type="text" className="form_input_field w-input" maxLength="256" name="Pick-Up-Location-1" data-name="Pick Up Location 1" placeholder="" id="add-stop-1" />
<div className="remove_button_container">
<div data-w-id="69b344e2-52bf-f1c2-d280-3ff9a89d3318" className="w-embed">
<div className="remove_button stop1" type="button" onClick={ClearStop1()}>
<img style={{objectFit: 'contain'}}/>
</div></div></div><div data-w-id="5f1eb80e-945b-1038-b7e6-0ed123895d55" className="add_input_button">
</div></div></div><address data-w-id="69b344e2-52bf-f1c2-d280-3ff9a89d3312" className="full_field_container_removable">
<label htmlFor="Pick-up-Location-2" className="form_field_label">
Stop 2</label><div className="clearable_input_field w-clearfix">
<input type="text" className="form_input_field w-input" maxLength="256" name="Pick-Up-Location-2" data-name="Pick Up Location 2" placeholder="" id="add-stop-2" />
<div className="remove_button_container">
<div data-w-id="e660e9b4-5e60-f996-4155-730f74b32487" className="w-embed">
<div className="remove_button stop2" type="button" onClick={ClearStop2()}>
<img style={{objectFit: 'contain'}}/>
</div></div></div><div data-w-id="69b344e2-52bf-f1c2-d280-3ff9a89d3319" className="add_input_button">
</div></div></address><div data-w-id="8a9fcc8c-2910-051b-ec01-7b668877228c" className="full_field_container_removable">
<label htmlFor="Pick-up-Location-2" className="form_field_label">
Stop 3</label><div className="clearable_input_field w-clearfix">
<input type="text" className="form_input_field w-input" maxLength="256" name="Pick-Up-Location-3" data-name="Pick Up Location 3" placeholder="" id="add-stop-3" />
<div className="remove_button_container">
<div data-w-id="8a9fcc8c-2910-051b-ec01-7b6688772292" className="w-embed">
<div className="remove_button stop3" type="button" onClick={ClearStop3()}>
<img style={{objectFit: 'contain'}} />
</div></div></div></div></div></div><div className="optional_form_category_container">
<div data-w-id="f99ad83a-cbec-c1c4-15be-df0fe6bfc646" className="optional_form_category_button">
<div className="plus_icon">
</div><div className="optional_category_add">
Add Return</div></div><div data-w-id="5d2c402b-c8a8-6b1b-3800-cd4ac17ea464" className="form_interaction_button w-embed">
<div className="collapse_return_button" onClick={ClearResetReturn()}>

	<div className="optional_form_category_button">

		<div className="minus_icon">
</div>
		<div className="optional_category_remove">
Remove Return</div>
  </div>  
</div></div><div data-w-id="645b0699-7c93-660d-25c7-63d404b9717c" className="return_date_time_container">
<div className="depart_arrive_picker">
<div className="radial_options_track">
<div className="radial_button_group">
<label className="radio_button_container w-radio">
<div className="w-form-formradioinput w-form-formradioinput--inputType-custom radial_button_selector_return w-radio-input">
</div><input type="radio" id="Depart-At-2" name="Return-Time-Type" value="Depart At" data-name="Return Time Type" style={{opacity:0,position:'absolute',zIndex:-1}} />
<span className="radio-button-label w-form-label" htmlFor="Depart-At-2">
Depart at</span></label><label className="radio_button_container w-radio">
<div className="w-form-formradioinput w-form-formradioinput--inputType-custom radial_button_selector_return w-radio-input">
</div><input type="radio" id="Arrive-By-2" name="Return-Time-Type" value="Arrive By" data-name="Return Time Type" style={{opacity:0,position:'absolute',zIndex:-1}} />
<span className="radio-button-label w-form-label" htmlFor="Arrive-By-2">
Arrive by</span></label></div></div></div><div className="date_time_picker">
<div className="half_field_container">
<label htmlFor="email-3" className="form_field_label">
Date</label><div className="w-embed">
<input name="Return Date" type="date" className="form_input_field" id="return-date-field" />
</div></div><div className="half_field_container">
<label htmlFor="Time" className="form_field_label">
Time</label><div className="w-embed">
<input name="Return Time" type="time" className="form_input_field" id="return-time-field" />
</div></div></div></div></div></div><div className="minus_icon">
</div></div><div className="slide w-slide" aria-label="2 of 3" role="group" style={{transform: 'translateX(0)', opacity: 1, transition: 'transform 500ms ease 0s', ariaHidden:true}}>
<h3 className="form_slide_heading" aria-hidden="true">
Bus Requirements</h3><div className="full_field_container" aria-hidden="true">
<label htmlFor="Party-Size" className="form_field_label" aria-hidden="true">
Party Size</label><input type="number" className="form_input_field w-input" maxLength="256" name="Party-Size" data-name="Party Size" placeholder="Number of seats will you need" id="Party-Size" tabIndex="-1" aria-hidden="true" />
</div><div className="full_field_container" aria-hidden="true">
<label htmlFor="field-2" className="form_field_label" aria-hidden="true">
More Details</label></div><textarea id="Additional-Details" name="Additional-Details" maxLength="5000" data-name="Additional Details" placeholder="Things we should know, special needs, and other requests" className="form_input_field_long w-input" tabIndex="-1" aria-hidden="true">
</textarea></div><div className="slide w-slide" aria-label="3 of 3" role="group" style={{transform: 'translateX(0)', opacity: 1, transition: 'transform 500ms ease 0s' }}aria-hidden="true">
<h3 className="form_slide_heading" aria-hidden="true">
Contact for Quote</h3><div className="full_field_container" aria-hidden="true">
<label htmlFor="Full-Name" className="form_field_label" aria-hidden="true">
Name</label><input type="text" className="form_input_field w-input" autoFocus={true} maxLength="256" name="Full-Name" data-name="Full Name" placeholder="Jonathan Smithereen" id="Full-Name" required="" tabIndex="-1" aria-hidden="true" />
</div><div className="full_field_container" aria-hidden="true">
<label htmlFor="Email" className="form_field_label" aria-hidden="true">
Email</label><input type="email" className="form_input_field w-input" maxLength="256" name="Email" data-name="Email" placeholder="email@email.com" id="Email" required="" tabIndex="-1" aria-hidden="true" />
</div><div className="full_field_container" aria-hidden="true">
<label htmlFor="Phone-Number" className="form_field_label" aria-hidden="true">
Phone Number</label><input type="tel" className="form_input_field w-input" maxLength="256" name="Phone-Number" data-name="Phone Number" placeholder="+1 (631) 543 2500" id="Phone-Number" required="" tabIndex="-1" aria-hidden="true" />
</div><div className="full_field_container" aria-hidden="true">
<label htmlFor="Company-2" className="form_field_label" aria-hidden="true">
Company (Optional)</label><input type="text" className="form_input_field w-input" maxLength="256" name="Company" data-name="Company" placeholder="Organization" id="Company-2" tabIndex="-1" aria-hidden="true" />
</div></div><div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">
Slide 1 of 3.</div></div><div data-w-id="960e0f56-8ea2-899f-5d46-cf7fd6b07aff" className="left-arrow w-slider-arrow-left" role="button" tabIndex="0" aria-controls="w-slider-mask-0" aria-label="previous slide" style={{display: 'none'}}>
<div className="button_icon left">
</div></div><div id="form-slider-right-arrow" data-w-id="960e0f56-8ea2-899f-5d46-cf7fd6b07b01" className="right_arrow w-slider-arrow-right" role="button" tabIndex="0" aria-controls="w-slider-mask-0" aria-label="next slide">
<div className="form_interaction_button continue">
Continue</div><div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="button_icon">
</div></div><input type="submit" id="form-submit-button" value="Submit" data-wait="Please wait..." data-w-id="e0ac354a-9cad-d0d4-015d-828d8fb4546b" className="form_submit_button w-button" style={{display: 'none'}} />
<div id="slider-indicator-container" className="slide-nav w-slider-nav">
<div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3" aria-pressed="true" role="button" tabIndex="0" style={{marginLeft: '5px', marginRight: '5px'}}>
</div><div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3" aria-pressed="false" role="button" tabIndex="-1" style={{marginLeft: '5px', marginRight: '5px'}}>
</div><div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3" aria-pressed="false" role="button" tabIndex="-1" style={{marginLeft: '5px', marginRight: '5px'}}>
</div></div></div></form><div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Quote success">
<div className="div-block-6">
<div className="lottie-animation" data-w-id="0b29c9a9-55b7-68fc-47c4-6e6c5cbeaca0" data-animation-type="lottie" data-src="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/632dcdb4304c723fd6274bd2_bus_quote_success_animation.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2" data-duration="2"></div><div className="text-block-14">
Thanks! your quote is on the way</div></div></div><div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Quote failure">
<div className="text-block-15">
Something went wrong. Please fill out all required fields and try again</div></div></div></div></div>
  )
}

export default GetAQuote