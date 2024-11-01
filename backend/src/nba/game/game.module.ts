import { Module } from '@nestjs/common'
import { GameController } from './game.controller'
import { GameService } from './game.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from './entities/game.entity'
import { TeamModule } from '../team/team.module'

@Module({
    imports: [TypeOrmModule.forFeature([Game]), TeamModule],
    providers: [GameService],
    controllers: [GameController],
    exports: [GameService]
})
export class GameModule {}
