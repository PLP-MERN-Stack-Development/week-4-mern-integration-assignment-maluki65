import express from 'express';
import {
  getPosts, getPost, createPost, updatePost, deletePost
} from '../controllers/posts.js';
import { body } from 'express-validator';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', body('title').notEmpty(), createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
