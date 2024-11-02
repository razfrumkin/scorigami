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
                host: configService.getOrThrow<string>('database.host'),
                port: configService.getOrThrow<number>('database.port'),
                username: configService.getOrThrow<string>('database.username'),
                password: configService.getOrThrow<string>('database.password'),
                database: configService.getOrThrow<string>('database.name'),
                entities: [Team, Game],
                synchronize: true,
                logging: ['query']
            })
        })
    ],
    providers: [],
    controllers: [],
    exports: [ConfigModule, TypeOrmModule]
})
export class CoreModule {}
