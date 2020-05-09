import { PlayerRepository } from '../PlayerRepository'

export class MockPlayerRepository implements PlayerRepository {
  async GetProfileById(id: string) {
    return (await import('./profile')).default(id)
  }
}
