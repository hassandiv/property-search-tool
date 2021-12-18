import { FC, useContext } from 'react'
// import { AppContext } from '../../provider/contextProvider'
// import { InitialStateType as IInitialStateType } from '../../provider/contextProvider'
import RadioButton from './radioButton'

const PropertyTypes: FC = () => {

    //const { filter, setFilter } = useContext<IInitialStateType>(AppContext)

    return (
        <div className="bg-gray-300 flex flex-col items-start">
            <RadioButton
                name="all"
                value=""
                label="All"
            />
            <RadioButton
                name="flat"
                value="flat"
                label="Flat"
            />
            <RadioButton
                name="terraced"
                value="terraced"
                label="Terraced House"
            />
            <RadioButton
                name="semi-detached"
                value="semi-detached"
                label="Semi-detached"
            />
            <RadioButton
                name="detached"
                value="detached"
                label="Detached"
            />
        </div>
    )
}
export default PropertyTypes