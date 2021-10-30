import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { ClientsModule } from './modules/clients.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
