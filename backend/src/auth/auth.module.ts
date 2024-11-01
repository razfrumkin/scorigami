import { Module } from '@nestjs/common'
import { AdminGuard } from './guards/admin.guard'

@Module({
    imports: [],
    providers: [AdminGuard],
    controllers: [],
    exports: []
})
export class AuthModule {}
