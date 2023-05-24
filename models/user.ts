import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Account } from './account';

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