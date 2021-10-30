import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { ClientsModule } from './modules/clients.module';
import { ProductsModule } from './modules/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClientsModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
