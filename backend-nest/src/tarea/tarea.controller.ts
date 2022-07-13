import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateHomeworkDTO } from './dto/create-homework';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {

  constructor(private HomeService : TareaService){}

  @Get()
  getHomeworks(): any{
    return this.HomeService.getAllHomeworks();
  }

  @Get(':id')
  getOneHomework(@Param('id')id: any): any{
    return this.HomeService.findOneHomework(id);
  }

  @Post('create')
  createHomework(@Body() homework: CreateHomeworkDTO) {
    this.HomeService.createHomework(homework);
    return 'tarea creada';
  }

  @Put(':id')
  UpdateHomework(
    @Param('id') id: any,
    @Body() updateBody: CreateHomeworkDTO,
  ){
    this.HomeService.updateHomeworkk(updateBody,id);
    return 'tarea actualizada';
  }

  @Delete(':id')
  deleteHomework(@Param('id') id: string) {
    this.HomeService.deleteHomework(id);
    return 'tarea eliminada'
  }
}
