import Head from "next/head";
/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/router";
import React from "react";


function About(){
    const router=useRouter();
    console.log('router',router.query)
    return(
        <>
        <Head>
            <title>About</title>
          </Head>
        <div>
            
<h1>About Company</h1>


<p>
Walmart.com offers a variety of features to serve the needs of our connected customers. It’s part of our promise of creating convenience at the lowest price, no matter how you shop. Here are just a few ways we’re helping customers save time and money:

Walmart App – From Walmart Pay to Mobile Express Returns, prescription refills and grocery orders with same-day pickup, we help you get more done with just the touch of a button.
Mobile Scan & Go – Shop and checkout with your phone in-store.
Curbside Pickup – Order online, pickup in store.
NextDay Delivery – In many markets, customers can enjoy fast, free shipping on eligible orders over $35.
Walmart+ – Membership program that brings together in-store and online benefits.
Walmart GoLocal – Walmart’s delivery as a service business that provides delivery to customers from businesses of all sizes.
Built for Better – an online shopping destination that makes it easy for customers to identify and shop for products that are built better – for them and for the planet.
</p>
        </div>
        </>
    )
}

export default About