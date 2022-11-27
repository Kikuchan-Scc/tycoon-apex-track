import { type } from "os";
import { Post } from "src/posts/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    comment: string

    @CreateDateColumn()
    created: Date;

    @ManyToOne(type => User)
    @JoinTable()
    author: User;

    @ManyToOne(type => Post, post => post.comments)
    post: Post
}
