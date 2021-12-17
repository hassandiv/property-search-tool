import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/layout'
import { AppProvider } from '../provider/contextProvider'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
