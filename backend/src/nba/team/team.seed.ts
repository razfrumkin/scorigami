import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Team } from './entities/team.entity'
import { Repository } from 'typeorm'
import * as teams from './data/teams.json'

@Injectable()
export class TeamSeed {
    constructor(
        @InjectRepository(Team)
        private readonly teamRepository: Repository<Team>
    ) {}

    async seed() {
        await this.teamRepository.save(teams)
    }
}
