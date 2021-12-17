import type { FC } from 'react'
import React, { useContext } from 'react'
import { AppContext } from '../../provider/contextProvider'
import { PropertyType as IPropertyType, InitialStateType as IInitialStateType } from '../../provider/contextProvider'

const SelectedProperties: FC = () => {

    const { selected } = useContext<IInitialStateType>(AppContext)

    return (
        <React.Fragment>
            <h2 className="py-8">Selected properties</h2>
            <div className="bg-gray-100 w-full max-h-60 h-60 overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-300 min-w-full flex flex-row justify-between items-center h-10 px-10">
                    <th>Address</th>
                    <th>Postcode</th>
                    <th>Number of rooms</th>
                    <th>Floor area (m2)</th>
                    </tr>
                </thead>
                <tbody>
                    {selected?.map((property: IPropertyType) =>
                        <tr key={property.id} className="w-full border-b border-black h-14 flex flex-row items-center justify-between px-10 text-left">
                            <td>{property.address}</td>
                            <td className="text-left">{property.postcode}</td>
                            <td>{property.numberOfRooms}</td>
                            <td>{property.floorArea}</td>
                        </tr>
                    )}
                </tbody>
                </table>
                </div>
        </React.Fragment>
    )
}
export default SelectedProperties