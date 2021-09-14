import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginateParams } from '../../types/PaginateParams';

@Controller('products')
export class ProductsController {
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
    const { limit, offset } = params;
    return `Products: limit => ${limit} offset=> ${offset}`;
  }
}
