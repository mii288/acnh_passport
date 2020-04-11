import { Profile } from '../types'

const getProfile: (id: string) => Promise<Profile> = async (id: string) =>
  (await import('./profile')).default(id)

export default { getProfile }
