import { Module } from '@nestjs/common'
import { CoreModule } from './core/core.module'
import { NBAModule } from './nba/nba.module'
import { AuthModule } from './auth/auth.module'
import { PingModule } from './ping/ping.module'
import { DatabaseModule } from './database/database.module'

@Module({
    imports: [CoreModule, PingModule, AuthModule, DatabaseModule, NBAModule],
    providers: [],
    controllers: [],
    exports: []
})
export class AppModule {}
