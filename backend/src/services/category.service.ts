import { CategoryRepository } from '../repositories/category.repository.js';
import { CategoryDTO } from '../dto/category.dto.js';

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAllCategories(): Promise<CategoryDTO[]> {
    const categories = await this.categoryRepository.findAll();
    
    return categories.map(category => ({
      id: category._id.toString(),
      name: category.name,
      slug: category.slug,
      image_url: category.image_url,
    }));
  }
}
