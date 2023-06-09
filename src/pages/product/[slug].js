import Breadcrumb from '@/components/layout/Breadcrumb';
import Router from 'next/router';
import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { BiRupee } from 'react-icons/bi';
import { addToCart } from '@/utils/cartitems';
import { toast } from 'react-hot-toast';
function SingleProduct({ product }) {
  const [quantity,setQuantity]=useState(0);
  

  return (
    <>
      <Head>
        <title>Product name</title>
      </Head>
      <main>
        <Breadcrumb title={'Product'} />
        <div className="row">
          <div className="col-lg-6">

            <Image src={product?.thumbnail} alt={product?.title} width={300} height={200} />

          </div>
          <div className="col-lg-6">

            <h2>{product?.title}</h2>
            <h4 className='card-title d-flex align-items-center'><BiRupee size={21} />{product?.price}</h4>
            <h5 className='mt-2'>Description</h5>
            <p>{product?.description}</p>
            <div className="d-flex gap-3">
              <b>Qty:</b>
              <div class="input-group input-group-sm w-25 mb-3 boder">
                <button class="input-group-text btn btn-sm btn-sm btn-outline-dark" onClick={()=> setQuantity(quantity>1?quantity-1:1)}>-</button>
                <input type="tel" class="form-control" value={quantity} />
                <button class="input-group-text btn btn-sm btn-sm btn-outline-dark" onClick={()=> setQuantity(quantity+1)}>+</button>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <button type='button' className='btn btn-sm btn-warning' onClick={(e)=>{addToCart(product,1),toast.success('Added in cart !!')}}>Add to Cart</button>
              {/* <button type='button' className='btn btn-sm btn-success'>Buy Now</button> */}
              {/* <button type='button' className='btn btn-sm btn-success' onClick={()=>{addToCart(product, quantity); Router.push('/checkout');}}>Buy Now</button> */}
              <button type='button' className='btn btn-sm btn-success' onClick={() => {
  addToCart(product, quantity);
  Router.push({
    pathname: '/checkout',
    query: { productId: product.id, quantity: quantity }
  });
}}>Buy Now</button>
            </div>


          </div>
        </div>

      </main>
    </>
  )
}

export default SingleProduct

export async function getServerSideProps(context) {
  const productId = context.params.slug;
  let product = []
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json()

  } catch (error) {
    console.error(error)
    return { notFound: true }
  }
  return {
    props: {
      product
    }
  }
}