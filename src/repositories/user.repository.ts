import { Repository, Sequelize } from 'sequelize-typescript';
import { connect } from '../../config/db.config';
import { APILogger } from '../../resources/logger/api.logger';
import { User } from '../models/user';

export class UserRepository {

    private logger: APILogger;
    private db: Sequelize = {} as Sequelize;
    private userRespository: Repository<User>;

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
        this.userRespository = this.db.getRepository(User);
    }

    async findAll():Promise<User[]> {
        
        try {
            const users = await this.userRespository.findAll();
            console.log('users:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async findById(id: string):Promise<User> {
        
        try {
            const users = await this.userRespository.findByPk(id);
            console.log('users:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

}