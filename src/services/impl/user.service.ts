import { User } from '../../models/user';
import { UserRepository } from '../../repositories/user.repository';
import { IUserService } from '../interfaces/Iuser.service';

export class UserService implements IUserService {

    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async findAll():Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async findById(id: string):Promise<User> {
        return await this.userRepository.findById(id);
    }
    

}