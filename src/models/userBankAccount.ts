import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { BankAccount } from './bankAccount';
import { User } from './user';

@Table
export class UserBankAccount extends Model {
  
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => BankAccount)
  @Column
  accountId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}