import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20, nullable: false })
    user_name: string;

    @Column({ length: 60, nullable: false })
    email: string;

    @Exclude()
    @Column({ length: 30, nullable: false })
    password: string

    @BeforeInsert()
    async encryptPwd() {
        this.password = await bcrypt.hashSync(this.password)
    }
}
