import type { FC } from 'react'

const Nav: FC = () => {

    return (
        <header className='relative bg-gray-100 h-28 w-full mb-20 lg:mb-10 flex items-center justify-center'>
            <h1 className='text-3xl'>Property search tool</h1>
            <img className='absolute top-4 left-4 h-32 w-auto border-4 border-white' alt='IMMO logo' title='IMMO' src='./immo-logo.svg'/>
        </header>
    )
}
export default Nav