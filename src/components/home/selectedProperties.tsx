import React, { FC, useContext, useEffect} from 'react'
import { PropertyDetails as IPropertyDetails, InitialStateType as IInitialStateType, AppContext } from '../../provider/contextProvider'
import { fetchPropertyDetails } from '../../pages/api/properties'

const SelectedProperties: FC = () => {

    const { properties, selectedProperties, setSelectedProperties, propertyId, setPropertyId } = useContext<IInitialStateType>(AppContext)
    const newSelectedProperties = [...selectedProperties]

    useEffect(() => {
        if (propertyId) {
            toggleChecked()
        }
    }, [propertyId])

    const toggleChecked = () => {
        const property = properties.find(property => property.id === propertyId)
        if(!property) return
        const findIndex = newSelectedProperties.indexOf(property)
        if (findIndex > -1) {
            newSelectedProperties?.splice(findIndex, 1)
        } else {
            newSelectedProperties?.push(property)
        }
        setSelectedProperties(newSelectedProperties)
        setPropertyId('')
    }

    return (
        <React.Fragment>
            <h2 className='text-xl py-8 font-medium'>Selected properties</h2>
            <div className='bg-gray-100 w-full h-96 overflow-auto'>
                <table className='custom-w-sp-mobile md:w-full'>
                    <thead className='bg-gray-300 h-10 text-center border-b-2 border-gray-400'>
                        <tr>
                        <th className='border-l-2 border-white w-44'>Address</th>
                        <th className='border-l-2 border-white'>Postcode</th>
                        <th className='border-l-2 border-white'>Number of rooms</th>
                        <th className='border-l-2 border-white'>Floor area (m2)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedProperties?.map((PropertyDetails: IPropertyDetails) =>
                            <tr key={PropertyDetails?.id} className='border-b border-gray-400 h-14 text-center'>
                                <td>{PropertyDetails?.address}</td>
                                <td>{PropertyDetails?.postcode}</td>
                                <td>{PropertyDetails?.numberOfRooms}</td>
                                <td>{PropertyDetails?.floorArea}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default SelectedProperties