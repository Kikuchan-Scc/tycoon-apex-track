import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string

    //评论id
    @PrimaryColumn('uuid')
    comment_id: string

    //帖子id
    @Column()
    post_id: string

    //用户id
    @Column()
    user_id: string


    //回复内容
    @Column()
    content: string;

    //评论时间
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createTime: Date
}
