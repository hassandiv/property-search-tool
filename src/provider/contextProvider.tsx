import { createContext, useState } from 'react'

export type PropertyType = {
  id: string
  address: string
  postcode: string
  propertyType?: string
  numberOfRooms: number
  floorArea: number
}

//we define our types here
export type InitialStateType = {
    //data?: PropertyType[]
    selected: PropertyType[]
    setSelected: React.Dispatch<React.SetStateAction<PropertyType[]>>
}

//we set our initial state and passed to AppContext, we can then pass boolean, number, array, string ...etc
export const initialState = {
    //data: [],
    selected: [],
    setSelected: () => null
}

// export const AppContext = createContext<ContextProps | null>(null)
// export const AppContext = createContext<{
//     selected?: InitialStateType
//     setSelected?: React.Dispatch<React.SetStateAction<InitialStateType>>
// }>({
//     selected: initialState,
//     setSelected: () => null
// })

export const AppContext = createContext<InitialStateType>(initialState)

export const AppProvider = ({ children }: any) => { //children remain any, because we don'y have specific type for it yet

    const [selected, setSelected] = useState<PropertyType[]>([])

    return (
        <AppContext.Provider
            value={{
                selected,
                setSelected,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}