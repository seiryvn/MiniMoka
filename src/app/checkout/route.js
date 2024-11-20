import { NextResponse } from "next/server";
import stripe from "@/src/lib/stripe"

export async function POST(req) {
    const data = await req.json();
    const cart = data.cart;

    const items_list = []
    for (let i = 0; i < cart.length; i++) {
        const product = await stripe.products.retrieve(cart[i].product_id)
        items_list.push({
            price: product.default_price,
            quantity: 1
        })
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items_list,
        mode: 'payment',
        success_url: 'https://mini-moka.com/checkout',
        cancel_url: 'https://mini-moka.com',
    })

    return NextResponse.json({
        message: session.url 
    }, {
        status: 200
    })
}