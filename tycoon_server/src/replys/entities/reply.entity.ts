import { type } from "os";
import { Comment } from "src/comments/entities/comment.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reply')
export class Reply {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    content: string

    @CreateDateColumn()
    created: Date

    @ManyToOne(type => User, { eager: true })
    author: User;

    @ManyToOne(type => Comment, comment => comment.reply, { eager: true })
    comments: Comment
}
