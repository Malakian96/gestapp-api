import * as express from 'express';
import { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { User } from '../models/user';
import { UserService } from '../services/impl/user.service';
export const userRoutes = express.Router();

const userController = new UserController(
    new UserService()
);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of Users
 *     description: Retrieve a list of users from Users.
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
userRoutes.get('users/', async (_: Request, res: Response<User[]>) => {
    res.send(await userController.findAll());
});



/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user
 *     description: Retrieve a user found by id
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
userRoutes.get('users/:id', async ({params}: Request, res: Response) => {
    res.send(await userController.findById(params.id));
});
