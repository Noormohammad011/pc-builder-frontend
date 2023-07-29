import RootLayout from '@/components/Layouts/RootLayout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </>
    </SessionProvider>
  )
}
