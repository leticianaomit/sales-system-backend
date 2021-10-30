import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/core/entities/client.entity';
import { ClientRepository } from 'src/core/repositories/client.repository';
import { ClientTypeormRepository } from 'src/infrastructure/typeorm/repositories/client-typeorm.repository';
import { CreateClientDto } from 'src/shared/dtos/clients/create-client.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public async execute(createClientDto: CreateClientDto) {
    const client = new Client(createClientDto);
    await this.repository.addClient(client);
  }
}
