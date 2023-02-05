import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { ProductList } from './productlists.model';

@Table
export class Product extends Model {
  
  @Column
  name: string;

  @Column
  description: string;

  @BelongsToMany(() => Product, () => ProductList)
  products: Product[];

}