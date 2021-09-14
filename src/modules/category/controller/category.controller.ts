import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `Estas en la categoria #${categoryId} dentro del producto #${productId}`;
  }
}
