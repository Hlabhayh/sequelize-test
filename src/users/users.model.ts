import {
  Table,
  Model,
  Column,
  PrimaryKey,
  /*DataType*/
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'product_owner' })
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  owner_id: number;

  @Column
  owner_name: string;

  @Column
  owner_city: string;

  @Column
  owner_address: string;

  @Column
  product_id: number;
}
