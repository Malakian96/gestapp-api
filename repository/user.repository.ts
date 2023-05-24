import { connect } from '../config/db.config';
import { APILogger } from '../logger/api.logger';
import { User } from '../models/user';

export class UserRepository {

    private logger: APILogger;
    private db: any = {};
    private UserRespository: any;

    constructor() {
        console.log('new instance');
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
        this.UserRespository = this.db.sequelize.getRepository(User);
    }

    async findAll():Promise<User[]> {
        
        try {
            const users = await this.UserRespository.findAll();
            console.log('users:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async findById(id: string):Promise<User> {
        
        try {
            const users = await this.UserRespository.findByPk(id);
            console.log('users:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

}