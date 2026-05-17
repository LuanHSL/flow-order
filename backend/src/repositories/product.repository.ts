import { ProductModel, IProduct } from '../models/product.model.js';

export class ProductRepository {
  async findByCategory(category: string): Promise<IProduct[]> {
    return await ProductModel.find({ categoryId: category }).exec();
  }
}
