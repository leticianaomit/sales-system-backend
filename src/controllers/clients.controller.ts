import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateClientDto } from 'src/typeorm/dtos/clients/create-client.dto';
import { UpdateClientDto } from 'src/typeorm/dtos/clients/update-client.dto';
import { CreateUserUseCase } from 'src/use-cases/clients/create-client.usecase';
import { DeleteClientUseCase } from 'src/use-cases/clients/delete-client.usecase';
import { FindAllUsersUseCase } from 'src/use-cases/clients/find-all-clients.usecase';
import { UpdateUserUseCase } from 'src/use-cases/clients/update-client.usecase';

@Controller('clients')
export class ClientsController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findAllUsersUseCase: FindAllUsersUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteClientUseCase: DeleteClientUseCase,
  ) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.createUserUseCase.execute(createClientDto);
  }

  @Get()
  findAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.updateUserUseCase.execute(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteClientUseCase.execute(id);
  }
}
