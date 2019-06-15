import { UserService } from './user.service';
import { UserRO } from './user.interface';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findMe(email: string): Promise<UserRO>;
    update(userId: number, userData: UpdateUserDto): Promise<import("./user.entity").UserEntity>;
    create(userData: CreateUserDto): Promise<UserRO>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    login(loginUserDto: LoginUserDto): Promise<UserRO>;
}
