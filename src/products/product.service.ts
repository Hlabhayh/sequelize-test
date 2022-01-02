import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_REPOSITORY') private product: typeof Product) {}

  public async getProducts(): Promise<Product[]> {
    return this.product.findAll<Product>();
  }

  public async getOne(id): Promise<Product> {
    return this.product.findOne({ where: { product_id: id } });
  }

  public async addProduct(data): Promise<any> {
    return this.product.create(data);
  }

  public async updateProduct(id, data): Promise<any> {
    return this.product.update(data, { where: { product_id: id } });
  }
  public async deleteProduct(id): Promise<any> {
    return this.product.destroy({ where: { product_id: id } });
  }
}
