import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Account } from './account';

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
 *         accountId:
 *           type: integer
 *           description: Account id.
 *           example: Leanne Graham
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
  @Column
  id: number;

  @Column
  name: string;

  @Column
  surname: string;

  @ForeignKey(() => Account)
  @Column
  accountId: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}