import { IsNotEmpty } from "class-validator";
import { Post } from "src/posts/entities/post.entity";

export class CreateUserDto {
  @IsNotEmpty({ message: "请输入邮箱" })
  email: string

  @IsNotEmpty({ message: '请输入电话' })
  phone: number

  @IsNotEmpty({ message: "请输入用户名" })
  username: string;

  @IsNotEmpty({ message: "请输入密码" })
  password: string;
}
