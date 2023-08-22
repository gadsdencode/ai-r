import RootLayout from './RootLayout'
import '/styles/custom.css'
import '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp