import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/domains/models/client.model';
import { ClientRepository } from 'src/repositories/client.repository';
import { UpdateClientDto } from 'src/domains/dtos/clients/update-client.dto';

@Injectable()
export class UpdateClientUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public execute(id: Client['id'], updateClientDto: UpdateClientDto) {
    return this.repository.updateClient(id, new Client(updateClientDto));
  }
}
