import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("info"); // 'info', 'success', 'error'
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  useEffect(() => {
    // Check for the Stripe payment intent query parameters
    const query = new URLSearchParams(window.location.search);
    const paymentIntentStatus = query.get("redirect_status");

    if (paymentIntentStatus === "succeeded") {
      setPaymentSuccess(true);
      setMessage("Payment succeeded!");
      setMessageType("success");
      // Redirect to '/invoice' after showing success message
      setTimeout(() => {
        navigate('/invoice');
      }, 3000);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      setMessageType("error");
    } else {
      setMessage("Processing payment...");
    }

    setIsLoading(false);
  };

  const renderAlert = () => {
    if (!message) return null;

    const baseClass = "p-4 mb-4 text-sm rounded-lg ";
    let alertClass = baseClass;

    if (messageType === "success") {
      alertClass += "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800";
    } else if (messageType === "error") {
      alertClass += "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800";
    } else {
      alertClass += "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800";
    }

    return (
      <div className={alertClass} role="alert">
        {message}
      </div>
    );
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
      </button>
      {renderAlert()}
    </form>
  );
}
