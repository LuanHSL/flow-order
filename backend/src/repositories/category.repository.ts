import { CategoryModel, ICategory } from '../models/category.model.js';

export class CategoryRepository {
  async findAll(): Promise<ICategory[]> {
    return await CategoryModel.find().exec();
  }
}
