import { Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configuration } from '../config/configuration'
import { Game } from '../nba/game/entities/game.entity'
import { Team } from '../nba/team/entities/team.entity'

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({ load: [configuration] }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get<string>('database.connectionString'),
                host: configService.get<string>('database.host'),
                port: configService.get<number>('database.port'),
                username: configService.get<string>('database.username'),
                password: configService.get<string>('database.password'),
                database: configService.get<string>('database.name'),
                entities: [Team, Game],
                synchronize: true
            })
        })
    ],
    providers: [],
    controllers: [],
    exports: [ConfigModule, TypeOrmModule]
})
export class CoreModule {}
