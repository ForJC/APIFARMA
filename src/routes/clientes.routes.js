import { addCliente,getCliente,getClientes,deleteCliente,updateCliente } from '../controllers/clientes.controllers.js';

import { Router } from 'express';
const router=Router();

//end points (Rutas)
router.get('/clientes',getClientes)
router.get('/clientes/:id',getCliente)
router.post("/clientes",addCliente)
router.delete('/clientes/:id', deleteCliente)
router.patch('/clientes/:id', updateCliente)

router.put('/clientes',(req,res)=>{
    res.send("Actualizar clientes!")
})

router.delete('/clientes',(req,res)=>{
    res.send("Eliminar clientes!")
})

router.patch('/clientes',(req,res)=>{
    res.send("Actualizacion parcial clientes!")
})

export default router;
