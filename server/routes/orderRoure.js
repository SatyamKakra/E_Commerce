import express from 'express';
import authUser from '../middleware/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';
import authSeller from '../middleware/authSeller.js';

const orederRouter = express.Router();

orederRouter.post('/cod', authUser, placeOrderCOD)
orederRouter.get('/user', authUser, getUserOrders)
orederRouter.get('/seller', authSeller, getAllOrders)
orederRouter.post('/stripe', authUser, placeOrderStripe)

export default orederRouter;
