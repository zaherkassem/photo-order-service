import { Router } from 'express';
import { createOrder, getUserOrders, getAllOrders } from '../controllers/orderController';

const router = Router();

// POST endpoint to create a new order
router.post('/', createOrder);

// GET endpoint to fetch all orders
router.get('/', getAllOrders);

// GET endpoint to fetch orders by userId
router.get('/:userId', getUserOrders);

export default router;
