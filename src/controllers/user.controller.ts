import { APILogger } from '../../resources/logger/api.logger';
import { User } from '../models/user';
import { IUserService } from '../services/interfaces/Iuser.service';
import { UserService } from '../services/impl/user.service';

export class UserController {

    private userService: IUserService;
    private logger: APILogger;

    constructor(userService: IUserService) {
        this.userService = userService;
        // this.userService = new UserService();
        this.logger = new APILogger();
    }

    async findAll():Promise<User[]> {
        this.logger.info('Controller: findAll', null);
        return await this.userService.findAll();
    }

    async findById(id: string) {
        this.logger.info('Controller: findById', null);
        // return await this.userService.findById(id);
        return [];
    }

}