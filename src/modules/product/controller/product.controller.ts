import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ProductService } from 'src/modules/product/service/product.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dtos';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('filter')
  getProductFilter() {
    // Cuando tenemos una ruta fija y también una con un valor dinámico
    // la ruta fija debe ir definida antes de la del valor dinámico como ocurre en este caso
    return { message: `Filtrando productos` };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('productId') productId: string) {
    return this.productService.findOne(productId);
  }

  @Get()
  getProducts() {
    return { data: this.productService.findAll() };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  updated(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
