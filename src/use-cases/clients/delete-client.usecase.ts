import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'src/core/entities/client.entity';
import { ClientRepository } from 'src/core/repositories/client.repository';

@Injectable()
export class DeleteClientUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public async execute(id: Client['id']) {
    return await this.repository.deleteClient(id);
  }
}
