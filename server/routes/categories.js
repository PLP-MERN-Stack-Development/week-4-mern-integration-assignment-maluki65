import express from 'express';
import { getCategories, createCategory } from '../controllers/categories.js';
import { body } from 'express-validator';

const router = express.Router();

// GET /api/categories
router.get('/', getCategories);

// POST /api/categories
router.post(
  '/',
  body('name').notEmpty().withMessage('Category name is required'),
  createCategory
);

export default router;
