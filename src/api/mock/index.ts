import { Profile } from '../types'

const getProfile: (id: string) => Promise<Profile> = async () =>
  (await import('./profile')).default

export default { getProfile }
