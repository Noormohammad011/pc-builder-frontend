import Link from 'next/link'
import React from 'react'
const FeaturedCard = ({ products }) => {
  return (
    <div className='text-center mt-5'>
      <h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl'>
        Featured Products
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto my-6'>
        {products?.slice(0, 6).map((product) => (
          <Link href={`/product/${product.category}/${product.id}`}>
            <div key={product.id} className='card w-96 bg-base-100 shadow-xl'>
              <figure>
                <img src={product.image} alt={product.productName} />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>
                  {product.productName}
                  <div className='badge badge-secondary'>
                    {product.category}
                  </div>
                </h2>

                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>
                    Status: {product.status.toString()}
                  </div>
                  <div className='badge badge-outline'>
                    Rating: {product.averageRating}
                  </div>
                </div>
                <div>
                  {/* <Link href={`/product/${encodeURIComponent(product.id)}`}>
                  <a className='btn btn-primary'>View Details</a>
                </Link> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCard
