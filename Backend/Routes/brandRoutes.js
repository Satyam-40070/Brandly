import express from 'express';
import { createBrand, deleteBrand, getAllBrands, updateBrand } from '../Brands/brandController.js';
import authenticateUser from '../middleware/auth.js';
const routerbrand = express.Router();

routerbrand.post('/create',authenticateUser, createBrand);
routerbrand.get('/', getAllBrands);
routerbrand.put('/update/:id',authenticateUser, updateBrand);
routerbrand.delete('/delete/:id',authenticateUser, deleteBrand);

export default routerbrand;