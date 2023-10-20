import { addVenta,getVenta,getVentas,deleteVenta,updateVenta } from '../controllers/ventas.controllers.js';

import { Router } from 'express';
const router=Router();

//end points (Rutas)
router.get('/ventas',getVentas)
router.get('/ventas/:id',getVenta)
router.post("/ventas",addVenta)
router.delete('/ventas/:id', deleteVenta)
router.patch('/ventas/:id', updateVenta)

router.put('/ventas',(req,res)=>{
    res.send("Actualizar ventas!")
})

router.delete('/ventas',(req,res)=>{
    res.send("Eliminar ventas!")
})

router.patch('/ventas',(req,res)=>{
    res.send("Actualizacion parcial ventas!")
})

export default router;
