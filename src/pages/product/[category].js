import FeaturedCard from '@/components/FeaturedCard'
import { useRouter } from 'next/router'
import React from 'react'

const ProductCategory = ({ products, params }) => {
  const router = useRouter()
  return (
    <div className='pb-20'>
      <FeaturedCard
        products={products}
        title='Products'
        categoryName={router.query?.category}
      />
    </div>
  )
}

export default ProductCategory

export const getStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/categories')
    const categories = await res.json()
    const paths = categories?.map((category) => ({
      params: { category },
    }))
    return { paths, fallback: false }
  } catch (error) {
    console.error('Error fetching categories:', error)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `http://localhost:5000/products?category=${params.category}`
    )
    const products = await res.json()
    return {
      props: {
        products,
      },
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      props: {
        products: [],
      },
    }
  }
}
