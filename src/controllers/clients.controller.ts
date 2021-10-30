import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientDto } from 'src/shared/dtos/clients/create-client.dto';
import { CreateUserUseCase } from 'src/use-cases/clients/create-client.usecase';

@Controller('clients')
export class ClientsController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    // this.createUserUseCase.execute(createClientDto);
  }
}
