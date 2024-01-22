// pages/checkout.js
import { useState } from "react";

const CheckoutPage = () => {
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const handleCheckout = () => {
    fetch("/api/sumup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkout_reference: "ref",
        amount: "1000",
        currency: "EUR",
        pay_to_email: "toto@mail.com",
      }),
    });
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <button onClick={handleCheckout}>Initiate Payment</button>
      {checkoutUrl && <a href={checkoutUrl}>Proceed to Payment</a>}
    </div>
  );
};

export default CheckoutPage;
