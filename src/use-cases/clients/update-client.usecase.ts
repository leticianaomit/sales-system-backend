import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/core/models/client.model';
import { ClientRepository } from 'src/repositories/client.repository';
import { UpdateClientDto } from 'src/typeorm/dtos/clients/update-client.dto';

@Injectable()
export class UpdateClientUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public async execute(id: Client['id'], updateClientDto: UpdateClientDto) {
    const client = new Client(updateClientDto);
    this.repository.updateClient(id, client);
  }
}
