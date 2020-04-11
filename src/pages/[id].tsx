import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Error from 'next/error'
import Layout from '../components/layout'
import Passport from '../components/Passport'
import { Profile } from '../api/types'
import api from '../api'

const Index: NextPage<{ profile: Profile }> = ({ profile }) => {
  try {
    return (
      <>
        <Head>
          <title>{profile.user.name}さんの自己紹介</title>
        </Head>
        <Layout>
          <Passport profile={profile} />
        </Layout>
      </>
    )
  } catch (error) {
    return <Error statusCode={404} />
  }
}

Index.getInitialProps = async ({ query, res }) => {
  const data = await api.getProfile(String(query.id))
  if (!data && res) res.statusCode = 404

  return { profile: data }
}

export default Index
