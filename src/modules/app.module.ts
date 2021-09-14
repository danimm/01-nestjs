import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BrandModule } from './brand/module/brand.module';
import { BrandController } from './brand/controller/brand.controller';
import { BrandService } from './brand/service/brand.service';

import { CategoryModule } from './category/module/category.module';
import { CategoryController } from './category/controller/category.controller';
import { CategoryService } from './category/service/category.service';

import { CustomerModule } from './customer/module/customer.module';
import { CustomerController } from './customer/controller/customer.controller';
import { CustomerService } from './customer/service/customer.service';

import { OrderModule } from './order/module/order.module';
import { OrderController } from './order/controller/order.controller';
import { OrderService } from './order/service/order.service';

import { ProductModule } from './product/module/product.module';
import { ProductController } from './product/controller/product.controller';
import { ProductService } from './product/service/product.service';

import { UserModule } from './user/module/user.module';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';

@Module({
  imports: [
    BrandModule,
    CategoryModule,
    CustomerModule,
    OrderModule,
    ProductModule,
    UserModule,
  ],
  controllers: [
    AppController,
    BrandController,
    CategoryController,
    CustomerController,
    OrderController,
    ProductController,
    UserController,
  ],
  providers: [
    AppService,
    BrandService,
    CategoryService,
    CustomerService,
    OrderService,
    ProductService,
    UserService,
  ],
})
export class AppModule {}
