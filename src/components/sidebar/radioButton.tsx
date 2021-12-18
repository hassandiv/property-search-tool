import { FC, useContext, useState, useEffect } from 'react'
import { AppContext } from '../../provider/contextProvider'
import { InitialStateType as IInitialStateType } from '../../provider/contextProvider'
//import { fetchProperties, fetchPropertyDetails, propertyTypes } from '../../pages/api/data'

import {getAvailablePropertyTypes} from "../../pages/api/properties"

export type ButtonType = {
    name: string
    value: string
    label: string
}

const RadioButton: FC<ButtonType> = ({ name, value, label }) => {

    const { category, setCategory } = useContext<IInitialStateType>(AppContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCategory(e.target.value)
    }

    console.log('category', category)

    //console.log('getAvailablePropertyTypes', propertyTypes.map(i => i.label))

    const [data, setData] = useState([])

    console.log('data', data)

    const api = async () => {
        const response = getAvailablePropertyTypes()
        const data = await response
        const { propertyTypes } = data
        setData(propertyTypes)
    }

    useEffect(() => {
        api()
        //try {
        //}
        // catch {
        // }
    }, [])
    
    return (
        <>
            {data?.map(type => 
                <label>
                    <input
                        type="radio"
                        name={type.value}
                        value={type.value}
                        checked={category === value}
                        //className="appearance-none"
                        onChange={handleChange}
                    />
                        {type.label}
                </label>
            )}
        </>
    )
}
export default RadioButton