import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Account extends Model<Account> {
  
  @PrimaryKey
  @Column
  id: number;

  @Column
  auth_token: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}