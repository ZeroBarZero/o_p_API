import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
import { IsEmail } from 'class-validator'
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    no: number;

    @IsEmail()
    @Column()
    email: string;

    @Column()
    password:string;

    @Column()
    name: string;

    @Column({ default: '' })
    image: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }
}
