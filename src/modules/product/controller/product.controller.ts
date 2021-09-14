import { Controller, Get, Query, Param } from '@nestjs/common';
import { PaginateParams } from '../types/PaginateParams';

@Controller('products')
export class ProductController {
  @Get('filter')
  getProductFilter() {
    return `Filtrando productos`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `Product #${productId}`;
  }

  @Get()
  getProducts(@Query() params: PaginateParams) {
    const { limit = 100, offset = 50 } = params;
    return `Products: limit => ${limit} offset=> ${offset}`;
  }
}
