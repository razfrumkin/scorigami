import { Module } from '@nestjs/common'
import { CoreModule } from './core/core.module'
import { NBAModule } from './nba/nba.module'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [CoreModule, AuthModule, NBAModule],
    providers: [],
    controllers: [],
    exports: []
})
export class AppModule {}
