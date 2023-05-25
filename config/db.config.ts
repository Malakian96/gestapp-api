import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';
import { Dialect } from 'sequelize';

export const connect = (): Sequelize => {

	const hostName: string  = process.env.HOST;
	const userName: string  = process.env.USER;
	const password: string  = process.env.PASSWORD;
	const database: string  = process.env.DB;
	const dialect : Dialect = process.env.DIALECT as Dialect;

	const sequelize = new Sequelize(database, userName, password, {
		host: hostName,
		dialect,
		repositoryMode: true,
		pool: {
			max: 10,
			min: 0,
			acquire: 20000,
			idle: 5000
		}
	});

	sequelize.addModels([User]);
   
	return sequelize;
};