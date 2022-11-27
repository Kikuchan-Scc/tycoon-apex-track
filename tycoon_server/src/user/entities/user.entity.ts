import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Post } from 'src/posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';


@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100, nullable: false })
    username: string;

    @Column({ length: 100, nullable: false })
    email: string;

    @Exclude()
    @Column({ length: 100, nullable: false })
    password: string

    @OneToMany(type => Post, post => post.author)
    posts: Post[]

    @OneToMany(
        type => Comment,
        comment => comment.author,
      )
      comments: Comment[];

    //加密返回密码
    @BeforeInsert()
    async encryptPwd() {
        this.password = await bcrypt.hashSync(this.password)
    }
}
