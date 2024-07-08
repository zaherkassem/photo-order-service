import { Request, Response } from 'express';
import Order, { OrderDocument } from '../models/orderModel';

// Function to create a new order
const createOrder = async (req: Request, res: Response) => {
  const { email, fullName, fullAddress, imageUrls, frameColor, user } = req.body;

  try {
    // Create new order instance
    const newOrder: OrderDocument = new Order({
      email,
      fullName,
      fullAddress,
      imageUrls,
      frameColor,
      user
    });
    // Save order to database
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Failed to create order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Function to get all orders
const getAllOrders = async (req: Request, res: Response) => {
    try {
      // Example: Fetch all orders from the database
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  };

 // Function to get orders by userId 
const getUserOrders = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const orders = await Order.find({ user: userId });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};


export { createOrder,getAllOrders, getUserOrders };
