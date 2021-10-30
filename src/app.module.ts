import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './controllers/clients.controller';
import { ClientTypeormRepository } from './infrastructure/typeorm/repositories/client-typeorm.repository';
import { CreateUserUseCase } from './use-cases/clients/create-client.usecase';
import { ClientRepository } from './core/repositories/client.repository';
import { typeOrmConfig } from 'typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ClientTypeormRepository]),
  ],
  controllers: [ClientsController],
  providers: [
    // { provide: 'ClientRepository', useClass: ClientTypeormRepository },
    ClientTypeormRepository,
    // UseCase
    CreateUserUseCase,
  ],
})
export class AppModule {}
