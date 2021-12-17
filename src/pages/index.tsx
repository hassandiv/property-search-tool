import type { NextPage } from 'next'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import SearchForm from '../components/home/searchForm'
import SelectedProperties from '../components/home/selectedProperties'
import SearchResults from '../components/home/searchResults'
import { fetchProperties, fetchPropertyDetails, getAvailablePropertyTypes } from './api/properties'
import { PropertyType as IPropertyType } from '../provider/contextProvider'

type Response = {
  //response: Response | undefined
  json(): Promise<any>
  ok: boolean | undefined
  statusCode?: number | undefined
}

export const getStaticProps: GetStaticProps = async (context) => {

  const res: Response = await fetch(`http://localhost:3000/api/data`)
  const data: IPropertyType[] = await res.json()
  const errorCode = res.ok ? 200 : res.statusCode

  return {
    props: {
      data: data || [],
      errorCode: errorCode || null
    }
  }
}

const Home: NextPage = ({ context, data, fetchProperties }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  // console.log('getAvailablePropertyTypes', getAvailablePropertyTypes.map(i => i.label))
  
  return (
    <div className="flex flex-col">
      <SearchForm />
      <SelectedProperties />
      <SearchResults data={data} />
    </div>
  )
}

export default Home