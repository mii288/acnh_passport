export interface Profile {
  land: {
    flower:
      | 'cosmoses'
      | 'hyacinths'
      | 'lilies'
      | 'mums'
      | 'pansies'
      | 'roses'
      | 'tulips'
      | 'windflowers'
    fruit: 'apple' | 'cherry' | 'orange' | 'peach' | 'pear'
    name: string
  }
  social: {
    discord: string | null
    instagram: string | null
    twitter: string | null
  }
  user: {
    ableId: string | null
    birth: {
      month: string
      day: string
    }
    description: string | null
    friendCode: string | null
    name: string
    pictureUrl: string
  }
}
