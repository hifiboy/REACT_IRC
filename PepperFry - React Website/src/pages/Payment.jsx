import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const PaymentPage = ({ stripe }) => {
  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async () => {
    try {
      // Call your server to create a payment intent or perform the necessary backend logic
      const response = await fetch('/your-payment-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1000, // Replace with your desired amount in cents
        }),
      });

      const { clientSecret } = await response.json();

      // Use stripe.confirmCardPayment to handle the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: stripe.elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setPaymentError(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        // Payment succeeded, you can handle success here
        console.log('Payment succeeded!');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentError('Error processing payment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      {paymentError && <div style={{ color: 'red' }}>{paymentError}</div>}
      <button onClick={handlePayment}>Submit Payment</button>
    </div>
  );
};

export default injectStripe(PaymentPage);
