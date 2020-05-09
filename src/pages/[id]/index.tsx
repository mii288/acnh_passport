import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Error from 'next/error'
import Layout from '../../components/layout'
import Passport from '../../components/Passport'
import { GetInitialPropsUseCase } from './GetInitialPropsUseCase'
import { MockPlayerRepository } from '../../repository/mock'
import { PlayerProfile } from '../../domain/PlayerProfile'

const Index: NextPage<{ profile: PlayerProfile }> = ({ profile }) => {
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
  const params: ConstructorParameters<typeof GetInitialPropsUseCase> = [
    {
      PlayerRepository: new MockPlayerRepository(),
    },
  ]

  const playerId = String(query.id)
  const data = await new GetInitialPropsUseCase(...params).execute(playerId)

  if (!data && res) res.statusCode = 404

  return { profile: data }
}

export default Index
