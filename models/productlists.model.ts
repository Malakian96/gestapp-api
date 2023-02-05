import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { List } from "./list.model";
import { Product } from "./product.model";

@Table
export class ProductList extends Model {

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => List)
  @Column
  listId: number;
}
