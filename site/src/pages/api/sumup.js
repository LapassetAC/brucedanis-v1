export default async function handler(req, res) {
  const { body } = req;
  // console.log(body);
  const { checkout_reference, amount, currency, pay_to_email } = req.body;

  const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
    },
    body: {
      checkout_reference: checkout_reference,
      amount: amount,
      currency: currency,
      pay_to_email: pay_to_email,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
}
