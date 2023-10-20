import { pool } from '../db.js'

export const getVentas=async(req,res)=>{
    const [rows] = await pool.query('SELECT * FROM ventas')
    res.json(rows)
}

export const getVenta=async(req,res)=>{
    // res.send("Obteniendo venta!")
    const [rows] = await pool.query('SELECT *FROM ventas where venta_id = ?',[req.params.id])
    res.json(rows)
}

export const addVenta = async (req, res) => {
    // res.send("Agregando venta!")
    // console.log(req.body)
    const { producto_id , cliente_id , tipo , total } = req.body;
    // const [data] = await pool.query(
    //   "INSERT INTO ventas (producto_id , cliente_id , tipo , total ) VALUES (?,?,?,?)",[producto_id , cliente_id , tipo , total ]
    // );
    // console.log(data);
    // res.send({
    //   id:data.insertId,
    //   producto_id,
    //   cliente_id,  
    //   tipo,
    //   total
    // })
}

export const updateVenta = async (req,res)=>{
  const {id}=req.params//de la url
  const {producto_id , cliente_id , tipo , total }=req.body//datos enviados
  const [result]=await pool.query('UPDATE ventas SET producto_id=IFNULL(?,producto_id),cliente_id=IFNULL(?,cliente_id),tipo=IFNULL(?,tipo),total=IFNULL(?,total) WHERE venta_id=?',[producto_id , cliente_id , tipo , total, id])
  //El ifnull valida los dtos en caso de no existir valores, solo actualiza los que si existan 
  if(result.affectedRows==0) return res.status(404).json({
    message:"Venta no encontrado!"
  })
  const [rows]=await pool.query('SELECT * FROM ventas WHERE venta_id=?',[id])
  res.json(rows[0])
}

export const deleteVenta=async(req,res)=>{
  const [data]=await pool.query('DELETE FROM ventas WHERE venta_id=?',[req.params.id])
  if (data.affectedRows<=0) return res.status(404).json({
    message:"Venta no encontrado!"
  })
  res.sendStatus(204)
}

