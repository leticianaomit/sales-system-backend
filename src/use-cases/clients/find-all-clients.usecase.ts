import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/core/repositories/client.repository';

@Injectable()
export class FindAllClientsUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public async execute() {
    return await this.repository.getAllClients();
  }
}
