import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/users.entity';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 25 }],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [Users, Category, Product],
      database: 'shopping_center',
      synchronize: true,
    }),
    CategoryModule,
    ProductModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
