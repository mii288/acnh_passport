import React from 'react'
import { NextPage } from 'next'
import Error from 'next/error'
import Layout from '../components/layout'

const Index: NextPage = () => {
  try {
    return (
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    )
  } catch (error) {
    return <Error statusCode={404} />
  }
}

export default Index
