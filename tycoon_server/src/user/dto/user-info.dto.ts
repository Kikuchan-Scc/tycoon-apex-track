import { IsNotEmpty } from "class-validator";

export class UserInfoDto {
    @IsNotEmpty()
    username: string;

    
}