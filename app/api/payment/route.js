import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  console.log(request);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await request.json();

  let body = data.body;
  const session = await stripe.checkout.sessions.create({
    line_items: body.map((item) => {
      const img = item.image[0].asset._ref;
      const newImage = img
        .replace("image-", "https://cdn.sanity.io/images/vfxfwnaw/production/")
        .replace("-webp", ".webp");

      return {
        price_data: {
          currency: "RON",
          product_data: {
            name: item.name,
            images: [newImage],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    }),
    mode: "payment",
    success_url: `${request.headers.host}/success`,
    cancel_url: "http://localhost:3000",
  });
  return NextResponse.json(session.url);
}
