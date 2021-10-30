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
import { CreateClientUseCase } from 'src/use-cases/clients/create-client.usecase';
import { DeleteClientUseCase } from 'src/use-cases/clients/delete-client.usecase';
import { FindAllClientsUseCase } from 'src/use-cases/clients/find-all-clients.usecase';
import { UpdateClientUseCase } from 'src/use-cases/clients/update-client.usecase';

@Controller('clients')
export class ClientsController {
  constructor(
    private createClientUseCase: CreateClientUseCase,
    private findAllClientsUseCase: FindAllClientsUseCase,
    private updateClientUseCase: UpdateClientUseCase,
    private deleteClientUseCase: DeleteClientUseCase,
  ) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.createClientUseCase.execute(createClientDto);
  }

  @Get()
  findAll() {
    return this.findAllClientsUseCase.execute();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.updateClientUseCase.execute(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteClientUseCase.execute(id);
  }
}
