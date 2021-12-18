import { FC, useContext } from 'react'
import { AppContext } from '../../provider/contextProvider'
import { InitialStateType as IInitialStateType } from '../../provider/contextProvider'
// import { fetchProperties, fetchPropertyDetails, propertyTypes } from '../../pages/api/data'

import propertyTypes from "../../pages/api/data"

export type ButtonType = {
    name: string
    value: string
    label: string
}

const RadioButton: FC<ButtonType> = ({ name, value, label }) => {

    const { category, setCategory } = useContext<IInitialStateType>(AppContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCategory(e.target.value)
    }

    console.log('category', category)

    //console.log('getAvailablePropertyTypes', propertyTypes.map(i => i.label))

//      const [newData, setNewData] = useState([])
//   //const [newData, setNewData] = useState([])

//   console.log('newData', newData)

//     useEffect( async () => {
//       const response = getAvailablePropertyTypes()
//       const data = await response
//       const { propertyTypes } = data
//       //console.log(propertyTypes);
//       // .then(res => {
//       //   if (res.status < 300) {
//       setNewData(propertyTypes)
//       //   }
//       // })
//     }, [])
    
    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                checked={category === value}
                //className="appearance-none"
                onChange={handleChange}
            />
                {label}
        </label>
    )
}
export default RadioButton