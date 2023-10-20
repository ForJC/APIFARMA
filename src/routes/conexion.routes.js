import { pool } from '../db.js';
import { Router } from 'express';

const router=Router();

router.get('/connection',async(req,res)=>{
    const [resultado] = await pool.query('SELECT 4+5 AS RESULTADO')
    console.log(resultado);
    res.json(resultado);
    // res.json(resultado[0])
})

export default router;