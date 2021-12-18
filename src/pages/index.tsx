import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import SearchForm from '../components/home/searchForm'
import SelectedProperties from '../components/home/selectedProperties'
import SearchResults from '../components/home/searchResults'
import { fetchProperties, fetchPropertyDetails, getAvailablePropertyTypes } from './api/properties'
//import { fetchProperties, fetchPropertyDetails, getAvailablePropertyTypes } from './api/data'
import { PropertyType as IPropertyType } from '../provider/contextProvider'

// type Response = {
//   //response: Response | undefined
//   json(): Promise<any>
//   ok: boolean | undefined
//   statusCode?: number | undefined
// }

// export const getStaticProps: GetStaticProps = async (context) => {

//   // const res: Response = await fetch(`http://localhost:3000/api/data`)
//   // const data: IPropertyType[] = await res.json()
//   // const errorCode = res.ok ? 200 : res.statusCode

//   const response = fetchPropertyDetails()
//   const data = await response
//   const { property } = data
//   //const errorCode = res.ok ? 200 : res.statusCode

//   return {
//     props: {
//       data: data, //|| [],
//       //errorCode: errorCode || null
//     },
//     //revalidate: 10
//   }
// }

// const Home: NextPage = ({ context, data, fetchProperties }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Home: NextPage = () => {


  const [data, setData] = useState([])

  const api = async () => {
    try {
      const response = fetchPropertyDetails()
      const data = await response
      const { property } = data
      setData(property)
      console.log('property', property)
    }
    catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    api()
  }, [])

    
  return (
    <div className="flex flex-col">
      <SearchForm />
      <SelectedProperties />
      <SearchResults data={data} />
    </div>
  )
}

export default Home