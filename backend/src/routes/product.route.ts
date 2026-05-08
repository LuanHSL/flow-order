import { Router } from 'express';
// import * as productService from '../services/product.service.js';

const router = Router();

/**
 * GET /products?category=:categoryId
 * Returns all products filtered by category
 */
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    if (!category || typeof category !== 'string') {
      res.status(400).json({ error: 'Query param "category" is required' });
      return;
    }

    // TODO: replace with productService.findByCategory(category)
    const products: unknown[] = [];

    res.json(products);
  } catch (error) {
    console.error('[Products] Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
