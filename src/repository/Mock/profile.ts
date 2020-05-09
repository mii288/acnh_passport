import { PlayerProfile } from '../../domain/PlayerProfile'

const mock: { [id: string]: PlayerProfile } = {
  1: {
    land: {
      flower: 'roses',
      fruit: 'peach',
      name: 'りゅうぐう',
      hemisphere: 'north',
    },
    social: {
      discord: null,
      instagram: '@dummy',
      twitter: '@dummy',
    },
    user: {
      ableId: 'MA-XXXX-XXXX-XXXX',
      birth: {
        month: '12',
        day: '31',
      },
      description:
        'ここに一言コメントが入ります。ここに一言コメントが入ります。ここに一言コメントが入ります。',
      friendCode: 'SW-XXXX-XXXX-XXXX',
      name: 'うらしまたろう',
      pictureUrl: '/img/dummies/user_profile.jpg',
    },
  },
  max: {
    land: {
      flower: 'roses',
      fruit: 'peach',
      name: '國'.repeat(10),
      hemisphere: 'south',
    },
    social: {
      discord: null,
      instagram: '@dummy',
      twitter: '@dummy',
    },
    user: {
      ableId: 'MA-XXXX-XXXX-XXXX',
      birth: {
        month: '12',
        day: '31',
      },
      description:
        'ここに一言コメントが入ります。ここに一言コメントが入ります。ここに一言コメントが入ります。',
      friendCode: 'SW-XXXX-XXXX-XXXX',
      name: '國'.repeat(10),
      pictureUrl: '/img/dummies/user_profile.jpg',
    },
  },
}

export default (id: string) => {
  if (id in mock) {
    return mock[id]
  }

  throw new Error(`id: ${id} is not exit`)
}
