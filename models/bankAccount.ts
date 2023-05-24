import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { OperationType } from './operationType';

@Table
export class BankAccount extends Model {
  
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;
  
  @Column
  amount: number;

  @ForeignKey(() => OperationType)
  @Column
  typeId: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}