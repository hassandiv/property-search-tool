import { FC, InputHTMLAttributes, useContext } from 'react'
import React from 'react'
import { AppContext, InitialStateType as IInitialStateType } from '../../provider/contextProvider'

const SearchForm: FC = () => {

    const { term, setTerm } = useContext<IInitialStateType>(AppContext)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTerm(e.target.value)
    }

    return (
        <React.Fragment>
            <p>search form</p>
            <input 
                type="search"
                name="search"
                value={term}
                className="bg-gray-100 border py-2"
                onChange={handleOnChange}
            />
        </React.Fragment>
    )
}
export default SearchForm