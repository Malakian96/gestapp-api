import { APILogger } from '../logger/api.logger';
import { UserService } from '../service/user.service';

export class UserController {

    private userService: UserService;
    private logger: APILogger;

    constructor() {
        this.userService = new UserService();
        this.logger = new APILogger();
    }

    async getUsers() {
        this.logger.info('Controller: getUsers', null);
        return await this.userService.getUsers();
    }

}