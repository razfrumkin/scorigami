import { Module } from '@nestjs/common'
import { TeamSeed } from './team.seed'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Team } from './entities/team.entity'
import { TeamService } from './team.service'
import { TeamController } from './team.controller'

@Module({
    imports: [TypeOrmModule.forFeature([Team])],
    providers: [TeamService, TeamSeed],
    controllers: [TeamController],
    exports: [TeamService]
})
export class TeamModule {}
