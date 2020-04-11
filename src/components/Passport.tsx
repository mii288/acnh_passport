import React from 'react'
import styles from './Passport.module.css'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { NextPage } from 'next'
import { Profile } from '../api/types'
import IconLand from '../assets/images/ico-land.svg'

const Passport: NextPage<{ profile: Profile }> = ({ profile }) => {
  return (
    <>
      <h1 className={styles.header}>{profile.user.name}さんの自己紹介</h1>
      <main className={styles.content}>
        <div className={styles.userContent}>
          {profile.user.pictureUrl && (
            <div className={styles.userLeft}>
              <img width="60" src={profile.user.pictureUrl} />
            </div>
          )}
          <div className={styles.userRight}>
            <p className={styles.landName}>
              <IconLand height="15px" />
              {profile.land.name}島{' '}
              {profile.land.hemisphere && (
                <> / {profile.land.hemisphere === 'north' ? '北' : '南'}半球</>
              )}
            </p>
            {profile.user.name && (
              <p className={styles.userName}>{profile.user.name}</p>
            )}
            <ul className={styles.snsLinks}>
              {profile.social.twitter && (
                <li>
                  <a href={`https://twitter.com/${profile.social.twitter}`}>
                    <FaTwitter size="15px" style={{ color: '#1da1f2' }} />
                  </a>
                </li>
              )}
              {profile.social.instagram && (
                <li>
                  <a href={`https://instagram.com/${profile.social.instagram}`}>
                    <FaInstagram size="15px" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className={styles.bottomContent}>
          {profile.user.description && (
            <p className={styles.userDescription}>{profile.user.description}</p>
          )}
          <dl className={styles.idList}>
            {profile.user.ableId && (
              <>
                <dt>マイデザイン作者ID</dt>
                <dd>{profile.user.ableId}</dd>
              </>
            )}
            {profile.user.friendCode && (
              <>
                <dt>フレンドコード</dt>
                <dd>{profile.user.friendCode}</dd>
              </>
            )}
          </dl>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Made with by <a href="https://mii288.github.io/">@mii288</a>
        </p>
        <p>更新日: {new Date().toLocaleString()}</p>
      </footer>
    </>
  )
}

export default Passport
