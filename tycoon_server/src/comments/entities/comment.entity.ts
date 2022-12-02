import { type } from "os";
import { Post } from "src/posts/entities/post.entity";
import { Reply } from "src/replys/entities/reply.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(type => Reply, reply => reply.comments)
    reply: Reply[]
}
