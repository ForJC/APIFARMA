import { pool } from '../db.js'

export const getProductos=async(req,res)=>{
    const [rows] = await pool.query('SELECT * FROM productos')
    res.json(rows)
}

export const getProducto=async(req,res)=>{
    // res.send("Obteniendo producto!")
    const [rows] = await pool.query('SELECT *FROM productos where producto_id = ?',[req.params.id])
    res.json(rows)
}

export const addProducto = async (req, res) => {
    // res.send("Agregando producto!")
    // console.log(req.body)
    const { nombre, compuesto, caducidad,precio } = req.body;
    // const [data] = await pool.query(
    //   "INSERT INTO productos (nombre,compuesto, caducidad, precio) VALUES (?,?,?,?)",[nombre,compuesto, caducidad, precio]
    // );
    // console.log(data);
    // res.send({
    //   id:data.insertId,
    //   nombre,
    //   compuesto,  
    //   caducidad,
    //   precio
    // })
}

export const updateProducto = async (req,res)=>{
  const {id}=req.params//de la url
  const {nombre,compuesto, caducidad, precio}=req.body//datos enviados
  const [result]=await pool.query('UPDATE productos SET nombre= IFNULL (?,nombre),compuesto=IFNULL(?,compuesto),caducidad=IFNULL(?,caducidad),precio=IFNULL(?,precio) WHERE producto_id=?',[nombre,compuesto,caducidad,precio,id])
  //El ifnull valida los dtos en caso de no existir valores, solo actualiza los que si existan 
  if(result.affectedRows==0) return res.status(404).json({
    message:"Producto no encontrado!"
  })
  const [rows]=await pool.query('SELECT * FROM productos WHERE producto_id=?',[id])
  res.json(rows[0])
}

export const deleteProducto=async(req,res)=>{
  const [data]=await pool.query('DELETE FROM productos WHERE producto_id=?',[req.params.id])
  if (data.affectedRows<=0) return res.status(404).json({
    message:"Producto no encontrado!"
  })
  res.sendStatus(204)
}







