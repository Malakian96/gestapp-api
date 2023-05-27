import { UserDto } from '../../dtos/user/user.dto';
import { UserLoginDto } from '../../dtos/user/userlogin.dto';
import { User } from '../../models/user';
import { UserRepository } from '../../repositories/user.repository';
import { IUserService } from '../interfaces/Iuser.service';

export class UserService implements IUserService {

    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async findAll(): Promise<UserDto[]> {
        return (await this.userRepository.findAll()).map(u => new UserDto().entityToDto(u));
    }

    async findById(id: string): Promise<UserDto> {
        return new UserDto().entityToDto(await this.userRepository.findById(id));
    }

    async register(payload: User): Promise<string> {
        return await this.userRepository.register(payload);
    }

    async login(userLogin: UserLoginDto): Promise<string> {
        return await this.userRepository.login(userLogin);
    }
}

