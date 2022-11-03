import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "请输入邮箱" })
  email: string

  @IsNotEmpty({ message: '请输入电话' })
  phone: number

  @IsNotEmpty({ message: "请输入用户名" })
  user_name: string;

  @IsNotEmpty({ message: "请输入密码" })
  password: string;
}