import type { NextPage } from 'next'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type IResponse = {
  json(): Promise<any>
  ok?: boolean | undefined
  statusCode?: number | undefined
}

type IProperties = {
  id: number
  address: string
  postcode: string
  propertyType: string
}[]

export const getStaticProps: GetStaticProps = async (context) => {

  const res: IResponse = await fetch(`http://localhost:3000/api/hello`)
  const data: IProperties[] = await res.json()
  const errorCode = res.ok ? 200 : res.statusCode

  return {
    props: {
      data,
      errorCode
    }
  }
}

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  console.log('data', data)
  
  return (
    <div>
      <h1>Next 12</h1>
    </div>
  )
}

export default Home