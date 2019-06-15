import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { UserRO } from './user.interface';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(loginUserDto: LoginUserDto): Promise<UserEntity>;
    create(dto: CreateUserDto): Promise<UserRO>;
    update(id: number, dto: UpdateUserDto): Promise<UserEntity>;
    delete(email: string): Promise<DeleteResult>;
    findById(id: number): Promise<UserRO>;
    findByEmail(email: string): Promise<UserRO>;
    generateJWT(user: any): any;
    private buildUserRO;
}
