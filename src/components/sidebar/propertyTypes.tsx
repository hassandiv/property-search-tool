import { FC, useContext, useState, useEffect } from 'react'
import { AppContext } from '../../provider/contextProvider'
import { InitialStateType as IInitialStateType } from '../../provider/contextProvider'
import { fetchProperties, fetchPropertyDetails, getAvailablePropertyTypes } from '../../pages/api/data'

//import { getAvailablePropertyTypes } from "../../pages/api/properties"

type PropertyType = {
    value: string
    label: string
}

type PropertyTypes = {
    value: string
    label: string
}[]

const PropertyTypes: FC = () => {

    const { category, setCategory } = useContext<IInitialStateType>(AppContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCategory(e.target.value)
    }

    const [data, setData] = useState<PropertyTypes>([])

    const api = async () => {
        try {
            const response = getAvailablePropertyTypes()
            const data = await response
            const { propertyTypes } = data
            setData(propertyTypes)
        }
        catch(err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        api()
    }, [])

    const revData = [...data].reverse()

    return (
        <div className="bg-gray-300 flex flex-col items-start">
            <label className={`${category === "" ? 'bg-gray-400' : 'bg-transparent'} w-full font-bold`}>
                <input
                    type="radio"
                    name="all"
                    value={undefined}
                    checked={category === undefined}
                    className="appearance-none"
                    onChange={handleChange}
                />
                All
            </label>
            {revData?.map((type: PropertyType) =>
                <label className={`${category === type.value ? 'bg-gray-400' : 'bg-transparent'} w-full`}>
                    <input
                        type="radio"
                        name={type.value}
                        value={type.value}
                        checked={category === type.value}
                        className="appearance-none"
                        onChange={handleChange}
                    />
                    {type.label}
                </label>
            )}
        </div>
    )
}
export default PropertyTypes