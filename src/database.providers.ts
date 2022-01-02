import { Sequelize } from 'sequelize-typescript';
import { Product } from './products/product.model';
import { Users } from './users/users.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Labhayh062165044',
        database: 'products',
        models: [Product, Users],
      });
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
