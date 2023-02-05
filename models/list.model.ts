import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { ProductList } from './productlists.model';
import { Product } from './product.model';

@Table
export class List extends Model {
  
  @Column
  name: string;

  @Column
  description: string;

  @BelongsToMany(() => Product, () => ProductList)
  products: Product[];

}