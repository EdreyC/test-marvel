import type { AppProps } from 'next/app'
import { Head } from 'next/document'
import { MarvelProvider } from '../contexts/MarvelContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>

    <MarvelProvider>
    <Component {...pageProps} />
    </MarvelProvider>
    </>
  )
}

export default MyApp
