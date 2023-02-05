import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class Product extends Model {
  
  @Column
  name: string;

  @Column
  description: string;

  @Column
  createAt: Date;

  @Column
  updatedAt: Date;

  @Column
  deletedAt: Date;

}