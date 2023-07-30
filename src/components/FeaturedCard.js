import { pcbuilder } from '@/redux/features/pcBuilderSlice'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

const FeaturedCard = ({ products }) => {
  const { data: session } = useSession()
  const router = useRouter()
  const { category } = router.query
  const dispatch = useDispatch()
  return (
    <div className='text-center mt-5'>
      <h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl'>
        Featured Products
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 container mx-auto my-6'>
        {products?.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.category}/${product.id}`}
          >
            <div className='card w-96 bg-base-100 shadow-xl'>
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

                <div className='card-actions justify-start flex items-center flex-wrap'>
                  {session?.user?.email && (
                    <Link href={`/pcBuilder`}>
                      <button
                        onClick={() => {
                          dispatch(
                            pcbuilder({
                              category,
                              product,
                            })
                          )
                        }}
                        className='badge badge-outline'
                      >
                        Add
                      </button>
                    </Link>
                  )}

                  <div className='badge badge-outline'>
                    Status: {product.status.toString()}
                  </div>
                  <div className='badge badge-outline'>
                    Rating: {product.averageRating}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCard
