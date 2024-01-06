import React, { useState } from 'react'

function Invoice() {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const inputChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div className="page_container w-container">
<div className="ticket_page_heading_wrapper">
<h2 className="ticket_page_heading">
Pay for Your Charter Trip Here</h2><h2 className="ticket_page_heading_spacer w-condition-invisible">
&nbsp;-&nbsp;</h2><h2 className="ticket_page_heading_line w-condition-invisible">
Charter Buses</h2><h2 className="ticket_page_heading_spacer w-condition-invisible">
&nbsp;-&nbsp;</h2><h2 className="ticket_page_heading_trip_type w-condition-invisible">
Charter</h2></div><div className="charter_ticket_section">
<img src="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter.png" loading="lazy" id="w-node-ea0d4ec4-a428-c9e5-0f82-83a17dbfb060-bb63e11a" sizes="100vw" alt="Regency Buses Chartering Fleet for Your Organization" srcSet="https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter-p-500.png 500w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter-p-800.png 800w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter-p-1080.png 1080w, https://assets-global.website-files.com/62f2f32fd64065d8ceeaa74b/632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter.png 1440w" className="charter_image" />
</div><div className="w-layout-grid product_container w-condition-invisible">
<div id="w-node-a672d346-0755-bb6f-37d2-541749319ca0-bb63e11a" className="product_images_wrapper">
<a href="#" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22media%22%7D%5D" className="product_images_lightbox_link w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
<img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" loading="lazy" width="946" src="https://assets-global.website-files.com/63055726fe06a13c4da66880/64f8714171282d1be5770d95_632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter.png" alt="Pay for Your Charter Trip Here" srcSet="https://assets-global.website-files.com/63055726fe06a13c4da66880/64f8714171282d1be5770d95_632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter-p-500.png 500w, https://assets-global.website-files.com/63055726fe06a13c4da66880/64f8714171282d1be5770d95_632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter-p-800.png 800w, https://assets-global.website-files.com/63055726fe06a13c4da66880/64f8714171282d1be5770d95_632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter-p-1080.png 1080w, https://assets-global.website-files.com/63055726fe06a13c4da66880/64f8714171282d1be5770d95_632f46290479200c50b1d0b3_Regency_Buses_Coach_Bus_Fleet_Charter.png 1440w" sizes="(max-width: 479px) 92vw, (max-width: 767px) 86vw, 85vw" className="main_product_image" />
</a><div className="product_image_collection_list_wrapper w-dyn-list w-dyn-items-repeater-ref">
<script type="text/x-wf-template" id="wf-template-88de9a8a-16e0-8dc1-4a4e-e0ddbfdfebfc">
%3Cdiv%20role%3D%22listitem%22%20class%3D%22product_image_collection_item%20w-dyn-item%20w-dyn-repeater-item%22%3E%3Ca%20href%3D%22%23%22%20data-wf-sku-bindings%3D%22%255B%257B%2522from%2522%253A%2522f_more_images_4dr%255B%255D%2522%252C%2522to%2522%253A%2522media%2522%257D%255D%22%20class%3D%22product_image_secondary_lightbox_link%20w-inline-block%20w-dyn-bind-empty%20w-lightbox%22%3E%3Cimg%20height%3D%22100%22%20loading%3D%22lazy%22%20data-wf-sku-bindings%3D%22%255B%257B%2522from%2522%253A%2522f_more_images_4dr%255B%255D%2522%252C%2522to%2522%253A%2522src%2522%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22product_image_additional%20w-dyn-bind-empty%22%2F%3E%3Cscript%20type%3D%22application%2Fjson%22%20class%3D%22w-json%22%3E%7B%0A%20%20%22items%22%3A%20%5B%5D%2C%0A%20%20%22group%22%3A%20%22ticket%20images%22%0A%7D%3C%2Fscript%3E%3C%2Fa%3E%3C%2Fdiv%3E</script><div role="list" className="collection_list w-dyn-items w-dyn-hide" data-wf-collection="f_more_images_4dr" data-wf-template-id="wf-template-88de9a8a-16e0-8dc1-4a4e-e0ddbfdfebfc">
</div><div className="empty-state w-dyn-empty">
<div>No items found.</div></div></div></div><div id="w-node-_4bf0124d-5730-6c4e-c439-202eac50f716-bb63e11a" className="product_details">
<div className="ticket_detail_container">
<div className="ticket_summary_block">
<div className="stops_block">
<div className="ticket_bus_icon">
</div><div id="ticket_stops_display" className="ticket_stops_display w-dyn-bind-empty">
</div></div><div className="dates_block">
<div className="ticket_calendar_icon">
</div><div className="ticket_dates_wrapper">
<div className="ticket_going_date w-dyn-bind-empty">
</div><div className="text-block-4 w-condition-invisible">
-</div><div className="ticket_returning_date w-dyn-bind-empty">
</div></div></div></div><p className="ticket_paragraph">
Enter your quote ID and the amount you would like to pay right now below</p><div className="divider description">
</div><div className="w-layout-grid itinerary">
<div className="stops_detail_wrapper">
<h3 className="ticket_itinerary_heading">
Departure</h3><div className="stop_list_heading">
Pick Up</div><ol role="list" className="pick_up_going">
<li className="list-item w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="rich-text-block-7 w-dyn-bind-empty w-richtext">
</div></div></li><li className="w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="rich-text-block-7 w-dyn-bind-empty w-richtext">
</div></div></li><li className="w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="rich-text-block-7 w-dyn-bind-empty w-richtext">
</div></div></li></ol><div className="stop_list_heading">
Drop Off</div><ol role="list" className="drop_off_going">
<li className="list-item drop-off w-condition-invisible">
<div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item drop-off w-condition-invisible">
<div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item drop-off w-condition-invisible">
<div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item drop-off w-condition-invisible">
<div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li></ol><div className="driver_tip_div">
<div className="stop_list_heading">
Suggested tip for drivers:</div><div className="tip_for_driver w-dyn-bind-empty">
</div></div></div><div className="divider description">
</div><div className="stops_detail_wrapper_return w-condition-invisible">
<h3 className="ticket_itinerary_heading">
Return</h3><div className="stop_list_heading">
Pick Up</div><ol role="list" className="pick_up_returning">
<li className="list-item w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item w-condition-invisible">
<div className="stop_time_wrapper">
<div className="ticket_time_icon">
</div><div className="stop_time w-dyn-bind-empty">
</div></div><div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li></ol><div className="stop_list_heading">
Drop Off</div><ol role="list" className="drop_off_returning">
<li className="list-item drop-off w-condition-invisible">
<div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li><li className="list-item drop-off w-condition-invisible">
<div className="stop_place_wrapper">
<div className="ticket_location_icon">
</div><div className="stop_location w-dyn-bind-empty w-richtext">
</div></div></li></ol><div className="driver_tip_div">
<div className="stop_list_heading">
Suggested tip for drivers:</div><div className="tip_for_driver w-dyn-bind-empty">
</div></div></div></div><div className="divider">
</div><div id="w-node-_4ce44fa6-9320-f35b-470b-d3b905952bbc-bb63e11a" className="product_disclaimer">
***All sales are final; No refund or exchanges; Tickets are non transferrable***</div><div className="add-to-cart">
<form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="64ee20d843330950bb63e182" data-loading-text="Adding to cart..." data-commerce-product-id="64ee20d843330950bb63e16b" className="w-commerce-commerceaddtocartform default-state">
<div className="w-layout-grid grid">
<div id="w-node-_6bd1e9e2-597c-9f43-8638-218f7cf52633-bb63e11a" className="option_qty_wrapper">
<div className="quantity_wrapper">
<div className="quantity_block">
<label htmlFor="quantity-3bd9bba612dfecdd3d6fdbb0d422d4a0" className="quantity_label">
Quantity</label><input value={inputValue} onChange={inputChange} type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-3bd9bba612dfecdd3d6fdbb0d422d4a0" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput quantity" value={1} />
</div></div></div><div className="checkout_wrapper">
<div className="subtotal_wrapper">
<label htmlFor="" className="ticket_info_label">
Subtotal</label><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="ticket_subtotal">
$&nbsp;1.00&nbsp;USD</div></div><div className="cart_buttons_wrapper">
<input value={inputValue} onChange={inputChange} type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." value={"Add to Cart"} aria-busy="false" aria-haspopup="false" className="w-commerce-commerceaddtocartbutton add_to_cart_button" />
<a id="Ticket_Buy_Now_Button" data-node-type="commerce-buy-now-button" data-default-text="Buy Now" data-subscription-text="Subscribe now" aria-busy="false" aria-haspopup="false" className="w-commerce-commercebuynowbutton buy_button" href="/checkout" data-publishable-key="pk_live_51JpfylFEGtfjjCaGUaeUiRRgdeOryDUaSehufnkzEiOAwAq5erEikmJzKFos0RqtnnwqkbhDdJvYfaHy5BICE6E700nu0x4sLa">
Buy Now</a></div></div></div></form><div tabIndex={0} style={{display:'none'}} className="w-commerce-commerceaddtocartoutofstock out-of-stock-state">
<div>This product is out of stock.</div></div><div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style={{display:'none'}} className="w-commerce-commerceaddtocarterror error-state-2">
<div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">
Product is not available in this quantity.</div></div></div></div></div></div><div className="add-to-cart-charter">
<form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="64ee20d843330950bb63e182" data-loading-text="Adding to cart..." data-commerce-product-id="64ee20d843330950bb63e16b" className="w-commerce-commerceaddtocartform default-state-2">
<label htmlFor="quantity-3bd9bba612dfecdd3d6fdbb0d422d4a0" className="field-label-11">
How much would you like to pay today?</label><div className="text-block-31">
 $</div><input value={inputValue} onChange={inputChange} type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-3bd9bba612dfecdd3d6fdbb0d422d4a0" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput quantity_charter" value={1} />
<a data-node-type="commerce-buy-now-button" data-default-text="Proceed" data-subscription-text="Subscribe now" aria-busy="false" aria-haspopup="false" className="w-commerce-commercebuynowbutton buy_button_checkout" href="/checkout" data-publishable-key="pk_live_51JpfylFEGtfjjCaGUaeUiRRgdeOryDUaSehufnkzEiOAwAq5erEikmJzKFos0RqtnnwqkbhDdJvYfaHy5BICE6E700nu0x4sLa">
Proceed</a></form><div tabIndex={0} style={{display:'none'}} className="w-commerce-commerceaddtocartoutofstock">
<div>This product is out of stock.</div></div><div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style={{display:'none'}} className="w-commerce-commerceaddtocarterror">
<div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">
Product is not available in this quantity.</div></div></div></div>
  )
}

export default Invoice