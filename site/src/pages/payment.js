import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://api.sumup.com/v0.1/checkouts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      checkout_reference: "totototsdfy",
      amount: "1000",
      currency: "EUR",
      pay_to_email: "toto@gmail.com",
    }),
  });
  const data = await res.json();
  console.log(data);
  return { props: { data } };
}

const CheckoutPage = ({ data }) => {
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  // const handleCheckout = () => {
  // fetch("https://api.sumup.com/v0.1/checkouts", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     checkout_reference: "tototot",
  //     amount: "1000",
  //     currency: "EUR",
  //     pay_to_email: "toto@gmail.com",
  //   }),
  // });

  // fetch("/api/sumup", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     checkout_reference: "ref",
  //     amount: "1000",
  //     currency: "EUR",
  //     pay_to_email: "toto@mail.com",
  //   }),
  // });
  // };

  return (
    <div>
      <h1>Checkout Page</h1>
      {/* <button onClick={handleCheckout}>Initiate Payment</button> */}
      {checkoutUrl && <a href={checkoutUrl}>Proceed to Payment</a>}
    </div>
  );
};

export default CheckoutPage;
