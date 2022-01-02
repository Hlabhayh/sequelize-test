import {
  Table,
  Model,
  Column,
  PrimaryKey,
  /*DataType*/
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'product_table' })
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  product_id: number;

  @Column
  product_name: string;

  @Column
  product_status: boolean;

  @Column
  product_description: string;

  @Column
  product_price: number;
}
