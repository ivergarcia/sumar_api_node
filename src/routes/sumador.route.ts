import { Router } from "express";
import { sumar } from '../controllers/sumador.controller';

const router = Router();

router.post('/sumar', sumar);

export default router;