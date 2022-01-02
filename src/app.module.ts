import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ProductModule } from './products/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, UsersModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
