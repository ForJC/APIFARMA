DROP DATABASE IF EXISTS farmacia;
CREATE DATABASE farmacia;
USE farmacia;

CREATE TABLE `productos` (
  `producto_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `compuesto` varchar(100) NOT NULL,
  `caducidad` int(11) NOT NULL DEFAULT '1900',
  `precio` int(11) NOT NULL DEFAULT '0000.00',
  PRIMARY KEY (`producto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `clientes` (
  `cliente_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `gender` enum('M','F') DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`cliente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ventas` (
  `venta_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` int(10) unsigned NOT NULL,
  `cliente_id` int(10) unsigned NOT NULL,
  `tipo` enum('lend','sell') NOT NULL,
  `total` int(11) NOT NULL DEFAULT '0000.00',
  PRIMARY KEY (`venta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*
mysql -u root -p

poner en uso una base de datos 
USE NOMBRE_db;
MOSTRAR TABLAS
show tables;
para visualizar la estructura de la TABLA
DESC NOMBRE_TABLA;
eliminar una base de datos
DROP DATABASES NOMBRE_db;
ELIMINAR UNA TABLA 
*/