import type { NextPage } from 'next'
import { useEffect, useContext } from 'react'
import { AppContext, InitialStateType as IInitialStateType, PropertyDetails as IPropertyDetails } from '../provider/contextProvider'
import SearchForm from '../components/home/searchForm'
import SelectedProperties from '../components/home/selectedProperties'
import SearchResults from '../components/home/searchResults'
import { fetchProperties, fetchPropertyDetails } from './api/properties'

const Home: NextPage = () => {

  const { setProperties, address, propertyType, selectedProperties } = useContext<IInitialStateType>(AppContext)

  useEffect(() => {
    if (address) {
      api()
    }
  }, [address, propertyType])

  const api = async () => {
    try {
      if (propertyType) { //get filtered properties
        const response = fetchProperties({ address, propertyType })
        const data = await response
        const { properties } = data
        await fullPropertyDetails(properties)
      }
      else { //get all properties
        const response = fetchProperties({ address })
        const data = await response
        const { properties } = data
        await fullPropertyDetails(properties)
      }
    }
    catch (err) {
      console.log('err', err)
    }
  }

  const fullPropertyDetails = async (properties: IPropertyDetails[]) => {
    const fullDetails = await Promise.all(properties.map( async (propertyDetail: IPropertyDetails) => {
      const response = await fetchPropertyDetails(propertyDetail.id)
      const details = await response
      return setCheckedProperties(details.property, selectedProperties)
    }))
    setProperties(fullDetails)
  }

  const setCheckedProperties = (property: IPropertyDetails, selectedProperties: IPropertyDetails[]) => {
    let foundProperty = selectedProperties.find(selectedProperty => selectedProperty.id === property.id)
    return foundProperty ? foundProperty : { ...property, checked: false }
  }

  return (
    <div className='flex flex-col'>
      <SearchForm />
      <SelectedProperties />
      <SearchResults />
    </div>
  )
}

export default Home