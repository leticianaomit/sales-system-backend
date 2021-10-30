import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './controllers/clients.controller';
import { ClientTypeormRepository } from './infrastructure/typeorm/repositories/client-typeorm.repository';
import { CreateUserUseCase } from './use-cases/clients/create-client.usecase';
import { typeOrmConfig } from 'typeorm.config';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ClientTypeormRepository]),
  ],
  controllers: [ClientsController],
  providers: [
    {
      provide: 'ClientRepository',
      inject: [Connection],
      useFactory: (connection) =>
        connection.getCustomRepository(ClientTypeormRepository),
    },
    // UseCase
    CreateUserUseCase,
  ],
})
export class AppModule {}
