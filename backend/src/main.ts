import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { TeamSeed } from './nba/team/team.seed'
import { json, urlencoded } from 'express'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const reflector = app.get(Reflector)
    const configService = app.get(ConfigService)
    const teamSeed = app.get(TeamSeed)

    app.setGlobalPrefix(configService.getOrThrow<string>('apiPrefix'))
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector))
    app.useGlobalPipes(new ValidationPipe({ transform: true }))

    const requestBodySizeLimit = configService.getOrThrow<string>(
        'requestBodySizeLimit'
    )

    app.use(json({ limit: requestBodySizeLimit }))
    app.use(urlencoded({ limit: requestBodySizeLimit, extended: true }))

    await teamSeed.seed()

    const port = configService.getOrThrow<number>('port')
    await app.listen(port)
}

bootstrap()
