import express from 'express'
import { upload } from '../configs/multer.js';
import authSeller from '../middleware/authSeller.js';
import { addProduct, addProductList, changeStock, productById } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array(["images"]), authSeller, addProduct);
productRouter.get('/list', addProductList)
productRouter.get('/id', productById)
productRouter.post('/stock', authSeller, changeStock)


export default productRouter;