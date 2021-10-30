import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from 'src/controllers/clients.controller';
import { ClientTypeormRepository } from 'src/typeorm/repositories/client-typeorm.repository';
import { CreateUserUseCase } from 'src/use-cases/clients/create-client.usecase';
import { DeleteClientUseCase } from 'src/use-cases/clients/delete-client.usecase';
import { FindAllUsersUseCase } from 'src/use-cases/clients/find-all-clients.usecase';
import { UpdateUserUseCase } from 'src/use-cases/clients/update-client.usecase';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClientTypeormRepository])],
  controllers: [ClientsController],
  providers: [
    {
      provide: 'ClientRepository',
      inject: [Connection],
      useFactory: (connection) =>
        connection.getCustomRepository(ClientTypeormRepository),
    },
    CreateUserUseCase,
    FindAllUsersUseCase,
    UpdateUserUseCase,
    DeleteClientUseCase,
  ],
})
export class ClientsModule {}
