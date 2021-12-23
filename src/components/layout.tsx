import type { FC } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import PropertyTypes from './sidebar/propertyTypes'
import { ChildrenType as IChildrenType } from '../provider/contextProvider'

const Layout: FC<IChildrenType> = ({ children }) => {

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Property Search Tool</title>
                <meta name='description' content='IMMO Property Search Tool' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <div className='flex flex-col lg:flex-row items-center justify-evenly px-5'>
                <aside className='relative w-full h-60 lg:w-52 mb-6 lg:mb-0'>
                    <PropertyTypes />
                </aside>
                <main className='max-w-5xl w-full h-auto lg:pl-20'>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )

}
export default Layout