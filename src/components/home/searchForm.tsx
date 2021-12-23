import { FC, useContext, useState, useEffect } from 'react'
import { InitialStateType as IInitialStateType, AppContext } from '../../provider/contextProvider'

const SearchForm: FC = () => {

    const { setAddress } = useContext<IInitialStateType>(AppContext)
    const [term, setTerm] = useState<string>('')

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setAddress(term)
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTerm(e.target.value)
    }

    useEffect(() => {
        if (term === '') {
            setAddress('')
        }
    }, [term])

    return (
        <form onSubmit={handleOnSubmit}>
            <p className='text-xl pb-6 font-medium'>Search</p>
            <div className='w-full flex flex-col sm:flex-row'>
                <input 
                    type='search'
                    name='search'
                    value={term}
                    placeholder='Search by address ...'
                    className='bg-gray-white w-full sm:w-10/12 py-2 px-3 border-2 mr-4 mb-5 sm:mb-0 rounded outline-none shadow-inner'
                    onChange={handleOnChange}
                />
                <button
                    className='bg-yellow-300 w-full sm:w-36 py-2 border-2 border-yellow-400 rounded shadow-md'
                    type='submit'
                >
                    Search
                </button>
            </div>
        </form>
    )
}
export default SearchForm