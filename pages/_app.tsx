import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container } from '@mui/material'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Container component='main' maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </div>
  )
}

export default MyApp
