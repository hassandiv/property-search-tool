import type { FC } from 'react'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../provider/contextProvider'
import { PropertyType as IPropertyType, InitialStateType as IInitialStateType } from '../../provider/contextProvider'

type Props = {
    data: IPropertyType[]
}

const SearchResults: FC<Props> = ({ data }) => {

    const { selected, setSelected } = useContext<IInitialStateType>(AppContext)

    const selectedProperties = [...selected]
    const handleOnChange = (property: IPropertyType): void => {
        const findIndex: number | undefined = selectedProperties?.indexOf(property)
        if (findIndex > -1) {
            selectedProperties?.splice(findIndex, 1)
        } else {
            selectedProperties?.push(property)
        }
        setSelected(selectedProperties)
    }

    return (
        <React.Fragment>
            <h2 className="py-8">Search results</h2>
            <table className="">
                <thead>
                    <tr className="bg-gray-300 min-w-full flex flex-row justify-between items-center h-10">
                    <th>Check</th>
                    <th>Address</th>
                    <th>Postcode</th>
                    <th>Property type</th>
                    <th>Number of rooms</th>
                    <th>Floor area (m2)</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {data?.map((property: IPropertyType) =>
                        <tr key={property.id} className="w-full border-b border-black h-14 flex flex-row items-center justify-between px-10">
                            <input
                                type="checkbox"
                                name="property"
                                onChange={() => handleOnChange(property)}
                            />
                            <td>{property.address}</td>
                            <td>{property.postcode}</td>
                            <td>{property.propertyType}</td>
                            <td>{property.numberOfRooms}</td>
                            <td>{property.floorArea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default SearchResults