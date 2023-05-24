import { APILogger } from '../logger/api.logger';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

export class UserController {

    private userService: UserService;
    private logger: APILogger;

    constructor() {
        this.userService = new UserService();
        this.logger = new APILogger();
    }

    async findAll():Promise<User[]> {
        this.logger.info('Controller: findAll', null);
        return await this.userService.findAll();
    }

    async findById(id: string):Promise<User> {
        this.logger.info('Controller: findById', null);
        return await this.userService.findById(id);
    }

}