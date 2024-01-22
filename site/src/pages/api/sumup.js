import axios from "axios";

export default async function handler(req, res) {
  const { amount, currency, description } = req.body;

  try {
    const response = await axios.post(
      "https://api.sumup.com/v0.1/checkouts",
      {
        amount,
        currency,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
        },
      }
    );

    res.status(200).json({ checkoutUrl: response.data.checkout_url });
  } catch (error) {
    console.error("SumUp API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
