import { IsNotEmpty, IsString } from 'class-validator'

export class FindByStringIdDto {
    @IsString()
    @IsNotEmpty()
    id: string
}
