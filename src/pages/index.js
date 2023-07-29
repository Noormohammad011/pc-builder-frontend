import Categories from '@/components/Categories'
import FeaturedCard from '@/components/FeaturedCard'
import Hero from '@/components/Hero'



export default function Home({ products }) {
  return (
    <main>
      <header>
        <Hero />
        <FeaturedCard products={products} />
        <Categories products={products} />
      </header>
    </main>
  )
}


export async function getStaticProps() { 
  const res = await fetch('https://pc-builder-json.vercel.app/products')
  const products = await res.json()
  return {
    props: {
      products: products,
    },
  }
}
