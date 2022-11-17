import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


Entity('topic')
export class Topic {
    @PrimaryGeneratedColumn('uuid')
    id: string

    //帖子id
    @PrimaryColumn('uuid')
    post_id: string

    //标题
    @Column({ length: 40 })
    title: string

    //内容
    @Column({})
    content: string

    //文章图片
    @Column({ default: null, name: 'content_url' })
    contentUrl: string;

    //封面图片
    @Column({ default: null, name: 'cover_url' })
    coverUrl: string;

    //用户id
    @Column({ length: 20 })
    author: string

    //点赞
    @Column({})
    like: number

    //阅读量
    @Column({})
    looked: number

    //发文时间
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createTime: Date
}
