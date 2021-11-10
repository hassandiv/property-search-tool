import type { FC } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'

const Layout: FC = ({ children }) => {

    return (
        <>
            <Head>
                <title>Property Search Tool</title>
                <meta name="description" content="IMMO Property Search Tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )

}
export default Layout