import { Request, Response } from 'express';
import { ProductService } from '../services/product.service.js';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const { category } = req.params;
      
      if (!category) {
        res.status(400).json({ error: 'Category param is required' });
        return;
      }

      const products = await this.productService.getProductsByCategory(category as string);
      res.status(200).json(products);
    } catch (error) {
      console.error('[ProductController] Error fetching products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
