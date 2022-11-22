import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: null, name: 'title' })
    title: string;

    @Column({ default: null, name: 'content' })
    content: string

    // 封面图
    @Column({ default: null, name: 'cover_url' })
    coverUrl: string;

    // 阅读量
    @Column({ type: 'int', default: 0 })
    count: number;

    // 点赞量
    @Column({ type: 'int', default: 0, name: 'like_count' })
    likeCount: number;

    @CreateDateColumn()
    create: Date

    @ManyToOne((type) => User, (user) => user.username)
    author: User;
}
