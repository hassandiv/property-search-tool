import { createContext, useState } from 'react'

export type PropertyType = {
    id: string
    address: string
    postcode: string
    propertyType?: string | undefined
    numberOfRooms: number
    floorArea: number
}

// type CategoryType = {
//     category: string
//     setCategory: () => null
// }

// type TermType = {
//     term: string
//     setTerm: () => void
// }

//we define our types here
export type InitialStateType = {
    //data?: PropertyType[]
    selected: PropertyType[]
    setSelected: React.Dispatch<React.SetStateAction<PropertyType[]>>
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
    term: string
    setTerm: React.Dispatch<React.SetStateAction<string>>
}

//we set our initial state and passed to AppContext, we can then pass boolean, number, array, string ...etc
// export const initialState = {
//     //data: [],
//     selected: [],
//     setSelected: () => null,
//     filter: '',
//     setFilter: () => null,
// }

const initialState = {
    //data: [],
    selected: [],
    setSelected: () => null,
    category: '',
    setCategory: () => null,
    term: '',
    setTerm: () => null,
}

// export const AppContext = createContext<ContextProps | null>(null)
// export const AppContext = createContext<{
//     selected?: PropertyType[]
//     setSelected?: React.Dispatch<React.SetStateAction<PropertyType[]>>
//     filter?: FilterType
//     setFilter?: React.Dispatch<React.SetStateAction<any>>
// }>({
//     // selected: never[],
//     // setSelected: () => null,
//     // filter: '',
//     // setFilter: () => null,
// })

//export const AppContext = createContext<InitialStateType>({}) // we use this one before
export const AppContext = createContext<InitialStateType>(initialState)

export const AppProvider = ({ children }: any) => { //children remain any, because we don'y have specific type for it yet

    const [selected, setSelected] = useState<PropertyType[]>([])
    const [category, setCategory] = useState('')
    const [term, setTerm] = useState('')

    return (
        <AppContext.Provider
            value={{
                selected,
                setSelected,
                category,
                setCategory,
                term,
                setTerm
            }}
        >
            {children}
        </AppContext.Provider>
    )
}