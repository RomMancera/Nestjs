import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCateDTO } from './dto/create.categoria.dto';
  
  @Controller('categoria')
  export class CatergoriaController {
  
    constructor(private CatService : CategoriaService){}
  
    @Get()
    getCategorias(): any{
      return this.CatService.getAllCategorias();
    }

    @Post('create')
    createCateria(@Body() categoria: CreateCateDTO) {
      this.CatService.createCate(categoria);
      return 'categoria creada';
    }
  

   /*
    @Get(':id')
    getOneHomework(@Param('id')id: any): any{
      return this.HomeService.findOneHomework(id);
    }
  
    @Put(':id')
    UpdateHomework(
      @Param('id') id: any,
      @Body() updateBody: CreateHomeworkDTO,
    ){
      this.HomeService.updateHomeworkk(updateBody,id);
      return 'tarea actualizada';
    }
  */
    @Delete(':id')
    deleteCate(@Param('id') id: string) {
      this.CatService.deleteCate(id);
      return 'categoria eliminada'
    } 
  }
  