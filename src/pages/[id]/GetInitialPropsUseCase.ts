import { PlayerRepository } from '../../repository/PlayerRepository'
import { BaseUseCase } from '../../usecases/BaseUseCase'

export class GetInitialPropsUseCase implements BaseUseCase {
  PlayerRepository: PlayerRepository

  constructor({ PlayerRepository }: { PlayerRepository: PlayerRepository }) {
    this.PlayerRepository = PlayerRepository
  }

  execute(id: string) {
    return this.PlayerRepository.GetProfileById(id)
  }
}
