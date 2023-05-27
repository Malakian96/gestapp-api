import * as express from 'express';
import { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/impl/user.service';
import { authenticateToken } from '../middlewares/auth';
import { UserDto } from '../dtos/user/user.dto';
export const userRoutes = express.Router();

const userController = new UserController(
    new UserService()
);

userRoutes.get('/users', async (_: Request, res: Response<UserDto[]>) => {
    res.send(await userController.findAll());
});

userRoutes.get('/users/:id', authenticateToken, async ({ params }: Request, res: Response<UserDto>) => {
    res.send(await userController.findById(params.id));
});


userRoutes.post('/users/register', async (req: Request, res: Response<string>) => {
    res.send(await userController.register(req.body));
});

userRoutes.post('/users/login', async (req: Request, res: Response<string>) => {
    res.send(await userController.login(req.body));
});
