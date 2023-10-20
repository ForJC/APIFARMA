import { pool } from '../db.js'

export const getClientes=async(req,res)=>{
  const [rows] = await pool.query('SELECT * FROM clientes')
  res.json(rows)
}

export const getCliente=async(req,res)=>{
  // res.send("Obteniendo cliente!")
  const [rows] = await pool.query('SELECT *FROM clientes where cliente_id = ?',[req.params.id])
  res.json(rows)
}

export const addCliente = async (req, res) => {
  // res.send("Agregando cliente!")
  // console.log(req.body)
  const { nombre, email , gender , active } = req.body;
  // const [data] = await pool.query(
  //   "INSERT INTO clientes (nombre, email , gender , active ) VALUES (?,?,?,?)",[nombre, email , gender , active ]
  // );
  // console.log(data);
  // res.send({
  //   id:data.insertId,
  //   nombre,
  //   email,  
  //   gender,
  //   active
  // })
}

export const updateCliente = async (req,res)=>{
const {id}=req.params//de la url
const {nombre, email , gender , active }=req.body//datos enviados
const [result]=await pool.query('UPDATE clientes SET nombre= IFNULL (?,nombre),email=IFNULL(?,email),gender=IFNULL(?,gender),active=IFNULL(?,active) WHERE producto_id=?',[nombre,email,gender,active,id])
//El ifnull valida los dtos en caso de no existir valores, solo actualiza los que si existan 
if(result.affectedRows==0) return res.status(404).json({
  message:"Cliente no encontrado!"
})
const [rows]=await pool.query('SELECT * FROM clientes WHERE cliente_id=?',[id])
res.json(rows[0])
}

export const deleteCliente=async(req,res)=>{
const [data]=await pool.query('DELETE FROM clientes WHERE cliente_id=?',[req.params.id])
if (data.affectedRows<=0) return res.status(404).json({
  message:"Cliente no encontrado!"
})
res.sendStatus(204)
}
