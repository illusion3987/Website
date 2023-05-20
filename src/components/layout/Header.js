import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BiCartAlt } from 'react-icons/bi'
import { getCartItems } from '@/utils/cartitems';

function Header() {
    const [cart,setCart] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            const cartItems=getCartItems();
            setCart(cartItems.length)
        },1000)
    },[])
    return (
        <>
            <nav className="navbar navbar-top-bg text-white d-none d-md-block">
                <div className="container-md">
                    <i className='nav-item navbar-nav'>Get up to 79% Discount Everyday</i>
                    <div className='dropdown p-0'>
                        <span className='dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false">My account</span>
                        <ul className='dropdown-menu'>
                            <li>
                                <Link className="dropdown-item" href="/account">Register</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/login">Login</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <nav className="navbar navbar-bg text-white d d-md-block">
                <div className="container-md">
                    <Link href="/" className='navbar-brand'>
                        <Image src="/images/walmart.jpg" width={180} height={90} alt="Company Logo" />
                    </Link>
                    <Link href="/cart" className='nav-item nav-link d-flex gap-1 align-itmes-center text-white'>
                        <span className='p-1 rounded-circle bg-primary'>
                            <BiCartAlt size={21} className="pb-1" />  
                        </span>
                        {cart} items
                    </Link>


                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm mb-2 rounded container px-2  ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link href="/" className='nav-item nav-link active' >Store</Link>
                        <Link href="/about" className='nav-item nav-link active' >About-us</Link>
                        <Link href="/PaymentPage" className='nav-item nav-link active'>Support</Link>



                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header
