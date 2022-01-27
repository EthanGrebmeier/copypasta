import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Body from '../src/components/Body'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
