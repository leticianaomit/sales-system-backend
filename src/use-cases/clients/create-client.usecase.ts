import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/domains/models/client.model';
import { ClientRepository } from 'src/repositories/client.repository';
import { CreateClientDto } from 'src/domains/dtos/clients/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public execute(createClientDto: CreateClientDto) {
    return this.repository.addClient(new Client(createClientDto));
  }
}
