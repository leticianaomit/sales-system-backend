import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/core/models/client.model';
import { ClientRepository } from 'src/repositories/client.repository';
import { CreateClientDto } from 'src/typeorm/dtos/clients/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public async execute(createClientDto: CreateClientDto) {
    const client = new Client(createClientDto);
    return await this.repository.addClient(client);
  }
}
