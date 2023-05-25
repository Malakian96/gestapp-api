import { Repository, Sequelize } from 'sequelize-typescript';
import { connect } from '../../config/db.config';
import { APILogger } from '../../logger/api.logger';
import { User } from '../models/user';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';



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

    async findAll(): Promise<User[]> {

        try {
            const users = await this.userRespository.findAll();
            console.log('users:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async findById(id: string): Promise<User | null> {

        try {
            const user = await this.userRespository.findByPk(id);
            console.log('user:::', user);
            return user;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async register(payload: User): Promise<string> {
        try {
            // TODO: Validation & error control
            // Get user input
            const { name, surname, email, password } = payload;

            // Validate user input
            if (!(email && password && name && surname)) {
                // res.status(400).send("All input is required");
            }

            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await this.userRespository.findAll({ where: { email: email } });

            if (oldUser) {
                // return res.status(409).send("User Already Exist. Please Login");
            }

            //Encrypt user password
            const encryptedPassword = await bcrypt.hash(password, 10);
            payload.password = encryptedPassword;

            // Create user in our database
            const user = await this.userRespository.create({...payload});

            // Create token
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );
            // save user token
            // user.token = token;

            // return new user
            return token;
        } catch (err) {
            console.log(err);
        }
        // Our register logic ends here
    }

}