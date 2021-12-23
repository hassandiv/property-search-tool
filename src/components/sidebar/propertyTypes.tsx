import React, { FC, useContext, useState, useEffect } from 'react'
import { InitialStateType as IInitialStateType, AppContext } from '../../provider/contextProvider'
import { getAvailablePropertyTypes } from '../../pages/api/properties'

type PropertyType = {
    value: string
    label: string
}

const PropertyTypes: FC = () => {

    const { propertyType, setPropertyType } = useContext<IInitialStateType>(AppContext)
    const [data, setData] = useState<PropertyType[]>([])
    const revData = [...data].reverse()

    useEffect(() => {
        api()
    }, [])
    
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPropertyType(e.target.value)

    }

    return (
        <div className="lg:absolute lg:custom-top-sidebar">
            <p className='text-xl pb-6 font-medium'>Property types</p>
            <div className='bg-gray-100 flex flex-col p-3 w-full md:w-56'>
                <label className={`${propertyType === '' ? 'font-bold' : ''} w-full cursor-pointer`}>
                    <input
                        type='radio'
                        name='all'
                        value={undefined}
                        checked={propertyType === undefined}
                        className='appearance-none'
                        onChange={handleChange}
                    />
                    All
                </label>
                {revData?.map((PropertyType: PropertyType, index: number) =>
                    <label key={index} className={`${propertyType === PropertyType.value ? 'font-bold' : ''} w-full py-1 cursor-pointer`}>
                        <input
                            type='radio'
                            name={PropertyType.value}
                            value={PropertyType.value}
                            checked={propertyType === PropertyType.value}
                            className='appearance-none'
                            onChange={handleChange}
                        />
                        {PropertyType.label}
                    </label>
                )}
            </div>
        </div>
    )
}
export default PropertyTypes