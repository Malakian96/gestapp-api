import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Daron
 *         surname:
 *           type: string
 *           description: The user's surname.
 *           example: Malakian
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: wiwi@gulugulu.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           example: wiwi1234
 *         createdAt:
 *           type: date-time
 *           description: The user's creation date.
 *           example: 2017-07-21T17:32:28Z
 *         updatedAt:
 *           type: date-time
 *           description: The user's last update date.
 *           example: 2017-07-21T17:32:28Z
 */
@Table
export class User extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  surname: string;
  
  @Column
  email!: string;
  
  @Column
  password!: string;

  @Column
  createdAt!: Date;

  @Column
  updatedAt: Date;

}