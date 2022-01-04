DROP DATABASE IF EXISTS fabastoredb;
CREATE DATABASE fabastoredb;
USE fabastoredb;

CREATE TABLE `usuarios` (
   `ID` INT AUTO_INCREMENT,
   `id_categoria` INT NOT NULL,
   `usuario` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `fecha` DATETIME,
   `nombre` VARCHAR(255) NOT NULL,
   `apellido` VARCHAR(255) NOT NULL,
   `domicilio` VARCHAR(255) NOT NULL,
   `avatar` VARCHAR(255),
   `id_carrito` INT,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `productos` (
   `ID` INT NOT NULL AUTO_INCREMENT,
   `modelo` VARCHAR(255) NOT NULL,
   `id_marca` INT NOT NULL,
   `id_tipoProducto` INT NOT NULL,
   `img` VARCHAR(255),
   `precio` VARCHAR(255) NOT NULL,
   `stockCantidad` VARCHAR(255) NOT NULL,
   `ofertaPorcentaje` DECIMAL NOT NULL,
   `precioConOferta` DECIMAL NOT NULL,
   `especificaciones` VARCHAR(255),
   PRIMARY KEY (`ID`)
);

CREATE TABLE `marca` (
   `ID` INT NOT NULL AUTO_INCREMENT,
   `nombreMarca` VARCHAR(255) NOT NULL,
   `empresa` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `tipoDeProducto` (
   `ID` INT NOT NULL AUTO_INCREMENT,
   `tipo_de_producto` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `categoria` (
   `ID` INT AUTO_INCREMENT,
   `nombreCategoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `carrito_table` (
   `ID` INT NOT NULL,
   `id_producto` INT NOT NULL,
   PRIMARY KEY (`ID`)
);


ALTER TABLE `usuarios` ADD CONSTRAINT `FK_5504c721-712c-44b2-b2c8-2bf429f388f4` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`ID`)  ;

ALTER TABLE `usuarios` ADD CONSTRAINT `FK_e11d13d4-503e-4a62-b196-2bfa80c1e251` FOREIGN KEY (`id_carrito`) REFERENCES `carrito_table`(`ID`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_2b207b0a-83f3-467b-ad8e-a3f6b2c4874f` FOREIGN KEY (`id_marca`) REFERENCES `marca`(`ID`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_d8d29f5a-64d1-4ac1-9dcd-96e02c3f4b80` FOREIGN KEY (`id_tipoProducto`) REFERENCES `tipoDeProducto`(`ID`)  ;

ALTER TABLE `carrito_table` ADD CONSTRAINT `FK_8cfe5b57-1256-492b-8fd8-707384bddde2` FOREIGN KEY (`id_producto`) REFERENCES `productos`(`ID`)  ;
