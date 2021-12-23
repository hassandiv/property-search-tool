import React, { FC, useContext } from 'react'
import { PropertyDetails as IPropertyDetails, InitialStateType as IInitialStateType, AppContext } from '../../provider/contextProvider'

const SearchResults: FC = () => {

    const { properties, setPropertyId } = useContext<IInitialStateType>(AppContext)

    const handleOnChange = (PropertyDetails: IPropertyDetails): void => {
        properties.filter((property: IPropertyDetails) => {
            if (property?.id === PropertyDetails?.id) {
                property.checked = !property?.checked
            }
        })
        setPropertyId(PropertyDetails?.id)
    }

    return (
        <React.Fragment>
            <h2 className='text-xl py-8 font-medium'>Search results</h2>
            <div className='bg-gray-100 h-96 w-full overflow-auto'>
                <table className='custom-w-sr-mobile md:w-full'>
                    <thead className='bg-gray-300 h-10 text-center border-b-2 border-gray-400'>
                        <tr>
                            <th><img className='h-3 w-auto mx-auto' src='./check.svg'/></th>
                            <th className='border-l-2 border-white w-44'>Address</th>
                            <th className='border-l-2 border-white'>Postcode</th>
                            <th className='border-l-2 border-white'>Property type</th>
                            <th className='border-l-2 border-white'>Number of rooms</th>
                            <th className='border-l-2 border-white'>Floor area (m2)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties?.map((PropertyDetails: IPropertyDetails) => 
                            <tr key={PropertyDetails.id} className='border-b border-gray-400 h-14 text-center'>
                                <td>
                                    <input
                                        type='checkbox'
                                        name='property'
                                        className='cursor-pointer'
                                        checked={PropertyDetails?.checked || false}
                                        onChange={() => handleOnChange(PropertyDetails)}
                                    />
                                </td>
                                <td>{PropertyDetails?.address}</td>
                                <td>{PropertyDetails?.postcode}</td>
                                <td>{PropertyDetails.propertyType}</td>
                                <td>{PropertyDetails.numberOfRooms}</td>
                                <td>{PropertyDetails.floorArea}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default SearchResults