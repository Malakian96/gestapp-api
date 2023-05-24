import * as express from 'express';
import { Request, Response } from 'express';

import { UserController } from '../controller/user.controller';
export const userRoutes = express.Router();

const userController = new UserController();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
userRoutes.get('/', async (_, res) => {
    res.send(await userController.findAll());
});

//TODO: make work swagger with multiple endpoints
// userRoutes.get('/:id', async (req: Request, res: Response) => {
//     res.send(await userController.findById(req.params.id));
// });