import { ProductRepository } from '../repositories/product.repository.js';
import { ProductDTO } from '../dto/product.dto.js';

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProductsByCategory(category: string): Promise<ProductDTO[]> {
    const products = await this.productRepository.findByCategory(category);
    
    return products.map(product => ({
      id: product._id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      categoryId: product.categoryId,
    }));
  }
}
