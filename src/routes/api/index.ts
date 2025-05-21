import { Router } from 'express';
const router = Router();
import userRoutes from './user_routes.js';
import thoughtsRoutes from './thought_routes.js';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

export default router;