import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string;

    @CreateDateColumn()
    create: Date

    @ManyToOne(type => User, (user) => user.posts)
    author: User
}
