import { PlayerProfile } from '../domain/PlayerProfile'

export interface PlayerRepository {
  GetProfileById: (playerId: string) => Promise<PlayerProfile>
}
