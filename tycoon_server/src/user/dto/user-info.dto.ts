import { IsNotEmpty } from "class-validator";

export class UserInfoDto {
    @IsNotEmpty()
    user_name: string;

    
}