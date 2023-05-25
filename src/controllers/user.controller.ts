import { APILogger } from '../../logger/api.logger';
import { User } from '../models/user';
import { IUserService } from '../services/interfaces/Iuser.service';

export class UserController {

    private userService: IUserService;
    private logger: APILogger;

    constructor(userService: IUserService) {
        this.userService = userService;
        this.logger = new APILogger();
    }

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Retrieve a list of Users
     *     description: Retrieve a list of users from Users.
     *     tags:
     *       - user
     *     responses:
     *       200:
     *         description: A list of users.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *               $ref: '#/components/schemas/User'
     */
    async findAll(): Promise<User[]> {
        this.logger.info('Controller: findAll', null);
        return await this.userService.findAll();
    }

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Retrieve a user
     *     description: Retrieve a user found by id
     *     tags:
     *       - user
     *     parameters:
     *       - in: path
     *         name: id
     *         type: integer
     *         required: true
     *         description: Numeric ID of the user to get.
     *     responses:
     *       200:
     *         description: The user found.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *          description: User not found
    */
    async findById(id: string) {
        this.logger.info('Controller: findById', null);
        return await this.userService.findById(id);
    }

}