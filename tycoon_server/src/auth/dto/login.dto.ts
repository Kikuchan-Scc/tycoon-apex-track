import { IsNotEmpty } from "class-validator";


export class LoginDto {
    @IsNotEmpty({message: '请输入用户名'})
    user_name: string;

    @IsNotEmpty({message: '请输入密码'})
    password: string
}