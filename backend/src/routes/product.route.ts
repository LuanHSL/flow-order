import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';

const router = Router();
const productController = new ProductController();

/**
 * GET /products/:category
 * Returns all products filtered by category
 */
router.get('/:category', productController.getByCategory);

export default router;
