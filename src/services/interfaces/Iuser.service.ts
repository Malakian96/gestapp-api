import { UserDto } from '../../dtos/user/user.dto';
import { UserLoginDto } from '../../dtos/user/userlogin.dto';
import { User } from '../../models/user';

export interface IUserService {
    findAll():Promise<UserDto[]>;

    findById(id: string):Promise<UserDto>;
    
    register(payload: User):Promise<string>;
    
    login(payload: UserLoginDto):Promise<string>;
}