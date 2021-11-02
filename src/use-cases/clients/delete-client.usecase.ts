import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/domains/models/client.model';
import { ClientRepository } from 'src/repositories/client.repository';

@Injectable()
export class DeleteClientUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public execute(id: Client['id']) {
    return this.repository.deleteClient(id);
  }
}
