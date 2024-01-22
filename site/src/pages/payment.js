// pages/checkout.js
import { useState } from "react";
import axios from "axios";

const CheckoutPage = () => {
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/checkout", {
        amount: 1000, // Replace with your actual amount
        currency: "USD", // Replace with your actual currency
        description: "Product Purchase", // Replace with your actual description
      });

      setCheckoutUrl(response.data.checkoutUrl);
    } catch (error) {
      console.error("Checkout Error:", error);
    }
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
