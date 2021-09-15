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
import { ProductService } from '../service/product.service';
import { Product } from 'src/entitites/product.entity';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('filter')
  getProductFilter() {
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
  create(@Body() payload: Product) {
    return this.productService.create(payload);
  }

  @Put(':id')
  updated(@Param('id') id: string, @Body() payload: Product) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
