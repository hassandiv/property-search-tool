import type { FC } from 'react'
import React from 'react'


const SearchForm: FC = () => {

    return (
        <React.Fragment>
            <p>search form</p>
            <input 
                type="search"
                name="search"
                value="hello"
                className="bg-gray-100 border py-2"
            />
        </React.Fragment>
    )
}
export default SearchForm