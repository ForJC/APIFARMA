import { addProducto,getProducto,getProductos,deleteProducto,updateProducto } from '../controllers/productos.controllers.js';

import { Router } from 'express';
const router=Router();

//end points (Rutas)
router.get('/productos',getProductos)
router.get('/productos/:id',getProducto)
router.post("/productos",addProducto)
router.delete('/productos/:id', deleteProducto)
router.patch('/productos/:id', updateProducto)

router.put('/productos',(req,res)=>{
    res.send("Actualizar productos!")
})

router.delete('/productos',(req,res)=>{
    res.send("Eliminar productos!")
})

router.patch('/productos',(req,res)=>{
    res.send("Actualizacion de productos!")
})

export default router;
