import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/repositories/client.repository';

@Injectable()
export class FindAllClientsUseCase {
  constructor(
    @Inject('ClientRepository') private readonly repository: ClientRepository,
  ) {}

  public execute() {
    return this.repository.getAllClients();
  }
}
