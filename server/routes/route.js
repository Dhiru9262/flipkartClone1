import express from 'express';
import { userSignup , userLogin} from '../controller/userController.js';
import { getProductById, getProducts } from '../controller/productController.js';
import { addPaymentGateWay } from '../controller/PaymentController.js';


const router = express.Router();


router.post('/signup', userSignup);
router.post('/login',userLogin);
router.get('/products',getProducts);
router.get('/product/:id', getProductById)
router.post('/payment',addPaymentGateWay);

export default router;