import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Error from 'next/error'
import Layout from '../../components/layout'
import Passport from '../../components/Passport'
import { GetInitialPropsUseCase } from './GetInitialPropsUseCase'
import { MockPlayerRepository } from '../../repository/mock'
import { PlayerProfile } from '../../domain/PlayerProfile'

const Index: NextPage<{ profile: PlayerProfile }> = ({ profile }) => {
  const captureEl = useRef<HTMLDivElement>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const onLoad = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (captureEl.current) {
      const html2canvas = (await import('html2canvas')).default
      const canvas: HTMLCanvasElement = await html2canvas(captureEl.current, {
        backgroundColor: '#f1e4bf',
        width: 360,
      })

      setImageUrl(canvas.toDataURL('image/png'))
    }
  }

  useEffect(() => {
    onLoad()
  })

  try {
    return (
      <>
        <Head>
          <title>{profile.user.name}さんの自己紹介</title>
        </Head>
        <Layout>
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              background: '#fff',
            }}
          >
            {imageUrl ? (
              <div>
                <img
                  src={imageUrl}
                  style={{
                    maxWidth: '100%',
                  }}
                />
                <a href={imageUrl}>保存</a>
              </div>
            ) : (
              <p>画像を準備中です...</p>
            )}
          </div>
          <div ref={captureEl} style={{ width: '360px' }}>
            <Passport profile={profile} />
          </div>
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
