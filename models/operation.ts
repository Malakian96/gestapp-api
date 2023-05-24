import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Operation extends Model {
  
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;
  
  @Column
  amount: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}