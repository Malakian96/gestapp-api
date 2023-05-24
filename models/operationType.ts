import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class OperationType extends Model {
  
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;
}