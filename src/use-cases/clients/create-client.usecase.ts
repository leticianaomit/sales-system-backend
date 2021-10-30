import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/core/entities/client.entity';
import { ClientRepository } from 'src/core/repositories/client.repository';
import { CreateClientDto } from 'src/typeorm/dtos/clients/create-client.dto';

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
