import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service.js';

export class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      console.error('[CategoryController] Error fetching categories:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
