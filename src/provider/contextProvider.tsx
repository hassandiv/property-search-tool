import { createContext, useState } from 'react'

export type PropertyType = {
    id: string
    address: string
    postcode: string
    propertyType?: string
    numberOfRooms: number
    floorArea: number
}

export type CategoryType = {
    category: string
}

export type TermType = {
    term: string
}

//we define our types here
export type InitialStateType = {
    //data?: PropertyType[]
    selected?: PropertyType[]
    setSelected?: React.Dispatch<React.SetStateAction<PropertyType[]>>
    category?: CategoryType
    setCategory?: React.Dispatch<React.SetStateAction<CategoryType>>
    term?: TermType
    setTerm?: React.Dispatch<React.SetStateAction<TermType>>
}

//we set our initial state and passed to AppContext, we can then pass boolean, number, array, string ...etc
// export const initialState = {
//     //data: [],
//     selected: [],
//     setSelected: () => null,
//     filter: '',
//     setFilter: () => null,
// }

export const initialState = {
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
    const [category, setCategory] = useState<CategoryType>('')
    const [term, setTerm] = useState<TermType>('')

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