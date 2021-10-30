import { Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/core/repositories/client.repository';
import { UpdateClientDto } from 'src/typeorm/dtos/clients/update-client.dto';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly repository: ClientRepository) {}

  public async execute(updateClientDto: UpdateClientDto) {
  }
}
