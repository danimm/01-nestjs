import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { Product } from '../../../entitites/product.entity';
import { nanoid } from 'nanoid';
@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: nanoid(),
      name: 'Product 1',
      description: 'This is the description from product 1',
      image: '',
      price: 1200,
      stock: 4,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((product) => product.id == id);
    if (!product) {
      throw new NotFoundException({
        error: `Product #${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }
    return product;
  }

  create(payload: Product): Product {
    const newProduct = { id: nanoid(), ...payload };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, payload: Product) {
    const index = this.products.findIndex((product) => product.id == id);

    if (index < 0) {
      throw new NotFoundException({
        error: `El product con id: ${id} no existe en la base de datos`,
        status: HttpStatus.NOT_FOUND,
      });
    } else {
      const product = this.findOne(id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return { message: 'Producto actualizado correctamente.' };
    }
  }

  delete(id: string) {
    const selectedProduct = this.products.findIndex(
      (product) => product.id === id,
    );

    if (selectedProduct < 0) {
      throw new NotFoundException({
        error: `El product con id: ${id} no existe en la base de datos`,
        status: HttpStatus.NOT_FOUND,
      });
    } else {
      this.products.splice(selectedProduct, 1);
      return { message: 'Producto borrado correctamente' };
    }
  }
}
