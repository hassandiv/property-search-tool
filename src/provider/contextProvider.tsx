import { createContext, useState } from 'react'

export type PropertyDetails = {
    id: string
    address: string
    postcode: string
    propertyType?: string | undefined
    numberOfRooms?: number
    floorArea?: number
    checked?: boolean
}

export type InitialStateType = {
    properties: PropertyDetails[]
    setProperties: React.Dispatch<React.SetStateAction<PropertyDetails[]>>
    selectedProperties: PropertyDetails[]
    setSelectedProperties: React.Dispatch<React.SetStateAction<PropertyDetails[]>>
    propertyType: string
    setPropertyType: React.Dispatch<React.SetStateAction<string>>
    address: string
    setAddress: React.Dispatch<React.SetStateAction<string>>
    propertyId: string
    setPropertyId: React.Dispatch<React.SetStateAction<string>>
}

export type ChildrenType = {
    children: React.ReactNode
}

const initialState = {
    properties: [],
    setProperties: () => null,
    selectedProperties: [],
    setSelectedProperties: () => null,
    propertyType: '',
    setPropertyType: () => null,
    address: '',
    setAddress: () => null,
    propertyId: '',
    setPropertyId: () => null,
}

export const AppContext = createContext<InitialStateType>(initialState)

export const AppProvider = ({ children }: ChildrenType) => {

    const [properties, setProperties] = useState<PropertyDetails[]>([])
    const [selectedProperties, setSelectedProperties] = useState<PropertyDetails[]>([])
    const [propertyId, setPropertyId] = useState('')
    const [propertyType, setPropertyType] = useState('')
    const [address, setAddress] = useState('')

    return (
        <AppContext.Provider
            value={{
                properties,
                setProperties,
                selectedProperties,
                setSelectedProperties,
                propertyType,
                setPropertyType,
                address,
                setAddress,
                propertyId,
                setPropertyId
            }}
        >
            {children}
        </AppContext.Provider>
    )
}