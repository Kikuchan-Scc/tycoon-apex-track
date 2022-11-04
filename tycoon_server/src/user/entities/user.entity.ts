import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


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

    //加密返回密码
    @BeforeInsert()
    async encryptPwd() {
        this.password = await bcrypt.hashSync(this.password)
    }
}
