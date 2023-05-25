import * as express from 'express';
import { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { User } from '../models/user';
import { UserService } from '../services/impl/user.service';
export const userRoutes = express.Router();

const userController = new UserController(
    new UserService()
);

userRoutes.get('/users', async (_: Request, res: Response<User[]>) => {
    res.send(await userController.findAll());
});

userRoutes.get('/users/:id', async ({ params }: Request, res: Response) => {
    res.send(await userController.findById(params.id));
});


userRoutes.post('/users/register', async (req: Request, res: Response) => {
    res.send(await userController.register(req.body));
});
