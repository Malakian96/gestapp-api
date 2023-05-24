import { User } from '../models/user';
import { UserRepository } from '../repository/user.repository';

export class UserService {

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