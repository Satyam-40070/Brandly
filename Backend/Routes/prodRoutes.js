import express from 'express';
import { createProduct, deleteProduct, getProductById, getAllProducts, updateProduct } from '../Products/prodController.js';

const routerprod = express.Router();

routerprod.post('/createprod', createProduct);
routerprod.get('/', getAllProducts);
routerprod.get('/:id', getProductById);
routerprod.put('/updateprod/:id', updateProduct);
routerprod.delete('/deleteprod/:id', deleteProduct);

export default routerprod;