import type { FC } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import PropertyTypes from './sidebar/propertyTypes'

const Layout: FC = ({ children }) => {

    return (
        <>
            <Head>
                <title>Property Search Tool</title>
                <meta name="description" content="IMMO Property Search Tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className="flex flex-row items-center justify-evenly">
                <aside className="w-80">
                    <PropertyTypes />
                </aside>
                <main className="max-w-5xl w-full">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )

}
export default Layout