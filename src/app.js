import express from 'express'
import clienteRouter from './routes/clientes.routes.js'
import productoRouter from './routes/productos.routes.js'
import ventaRouter from './routes/ventas.routes.js'
//import connectionRoutes from './routes/conexion.routes.js'
//IMORTAR LAS VARIABLES DE ENTORNO
import './config.js'
const app=express()
app.use(express.json())
app.use('/api',clienteRouter)
app.use('/api',productoRouter)
app.use('/api',ventaRouter)
//app.use(connectionRoutes)
//MANEJO DE ERRORES CUANDO LA RUTA NO ES ENCONTRADA
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Ruta no encontrada... Verifique"
    })
})
export default app;