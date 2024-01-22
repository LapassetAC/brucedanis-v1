import axios from "axios";

export default async function handler(req, res) {
  const { body } = req;
  // console.log(body);
  const { checkout_reference, amount, currency, pay_to_email } = req.body;

  try {
    const response = await axios.post(
      "https://api.sumup.com/v0.1/checkouts",
      {
        checkout_reference,
        amount,
        currency,
        pay_to_email,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error("SumUp API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // fetch("https://api.sumup.com/v0.1/checkouts", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: req.body
  // });
}
