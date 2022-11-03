import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 20, nullable: false })
    user_name: string;

    @Column({ length: 60, nullable: false })
    email: string;

    @Column({ nullable: false })
    phone: number;

    @Column({ length: 30, nullable: false })
    password: string
}
