import { IsNotEmpty } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty({ message: '文章标题必填' })
    readonly title: string;

    readonly content: string;

    readonly coverUrl: string;

    // readonly status: string
}
