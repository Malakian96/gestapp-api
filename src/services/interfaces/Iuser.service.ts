import { User } from '../../models/user';

export interface IUserService {
    findAll():Promise<User[]>;

    findById(id: string):Promise<User>;
    
    register(payload: User):Promise<string>;
}