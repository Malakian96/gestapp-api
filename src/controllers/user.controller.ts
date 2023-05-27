import { APILogger } from '../../logger/api.logger';
import { UserDto } from '../dtos/user/user.dto';
import { UserLoginDto } from '../dtos/user/userlogin.dto';
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
    async findAll(): Promise<UserDto[]> {
        this.logger.info('Controller: findAll', null);
        return (await this.userService.findAll());
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

    /**
     * @swagger
     * /users/register:
     *   post:
     *     summary: Register a user
     *     description: Register a user found by id
     *     tags:
     *       - user
     *     parameters:
     *       - in: body
     *         description: The user to create.
     *         schema:
     *           $ref: '#/components/schemas/User'
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
    async register(payload: User) {
        this.logger.info('Controller: register', null);
        return await this.userService.register(payload);
    }

    /**
     * @swagger
     * /users/login:
     *   post:
     *     summary: Login a user
     *     description: Register a user found by id
     *     tags:
     *       - user
     *     parameters:
     *       - in: body
     *         description: The user to create.
     *         schema:
     *           $ref: '#/components/schemas/UserLogin'
     *     responses:
     *       200:
     *         description: The user token.
     *         content:
     *           application/json:
     *             schema:
     *               type: string
     *               example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6Imp1ZGl0aHBlcmV6cXVpam9AZ21haWwuY29tIiwiaWF0IjoxNjg1MjAyNjE5LCJleHAiOjE2ODUyMDk4MTl9.Os7eZnLcZl96rqcKPBe6rjZY93OlJWLZDIr9A_0UREQ
     *       404:
     *          description: User not found
    */
    async login(payload: UserLoginDto) {
        this.logger.info('Controller: login', null);
        return await this.userService.login(payload);
    }

}