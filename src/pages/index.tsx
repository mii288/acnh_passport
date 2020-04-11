import React from 'react'
import { NextPage } from 'next'
import Error from 'next/error'
import Layout from '../components/layout'
import { Profile } from '../api/types'
import api from '../api'

const Index: NextPage<{ profile: Profile }> = ({ profile }) => {
  try {
    return (
      <Layout>
        <ul>
          {profile.land.name && <li>{profile.land.name}島</li>}
          {profile.land.fruit && <li>{profile.land.fruit}</li>}
          {profile.land.flower && <li>{profile.land.flower}</li>}
          {profile.user.name && <li>{profile.user.name}</li>}
          {profile.user.pictureUrl && (
            <li>
              <img src={profile.user.pictureUrl} />
            </li>
          )}
          {profile.user.description && <li>{profile.user.description}</li>}
          {profile.user.birth && (
            <li>
              {profile.user.birth.month}月{profile.user.birth.day}日 うまれ
            </li>
          )}
        </ul>
        <dl>
          <dt>エイブルシスターズ作者ID</dt>
          {profile.user.ableId && <dd>{profile.user.ableId}</dd>}
          <dt>フレンドコード</dt>
          {profile.user.friendCode && <dd>{profile.user.friendCode}</dd>}
          <dt>Twitter</dt>
          {profile.social.twitter && <dd>{profile.social.twitter}</dd>}
          <dt>Discord</dt>
          {profile.social.discord && <dd>{profile.social.discord}</dd>}
          <dt>Instagram</dt>
          {profile.social.instagram && <dd>{profile.social.instagram}</dd>}
        </dl>
      </Layout>
    )
  } catch (error) {
    return <Error statusCode={404} />
  }
}

Index.getInitialProps = async _ctx => {
  const id = 'dummy'
  const res = await api.getProfile(id)

  return {
    profile: res,
  }
}

export default Index
