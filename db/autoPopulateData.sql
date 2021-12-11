-- erase everything --

-- users --
DELETE FROM fabastoredb.usuarios;
ALTER TABLE fabastoredb.usuarios AUTO_INCREMENT=1;

-- cart --
DELETE FROM fabastoredb.carrito_table;
ALTER TABLE fabastoredb.carrito_table AUTO_INCREMENT=1;

-- products --
DELETE FROM fabastoredb.productos;
ALTER TABLE fabastoredb.productos AUTO_INCREMENT=1;

-- type of product --
DELETE FROM fabastoredb.tipoDeProducto;
ALTER TABLE fabastoredb.tipoDeProducto AUTO_INCREMENT=1;

-- models --
DELETE FROM fabastoredb.modelo;
ALTER TABLE fabastoredb.modelo AUTO_INCREMENT=1;

-- brands --
DELETE FROM fabastoredb.marca;
ALTER TABLE fabastoredb.marca AUTO_INCREMENT=1;

-- categories --
DELETE FROM fabastoredb.categoria;
ALTER TABLE fabastoredb.categoria AUTO_INCREMENT=1;


-- categories --
INSERT INTO fabastoredb.categoria (ID, nombreCategoría) VALUES
(1,"Admin"), (2,"Cliente")

-- brands --
INSERT INTO fabastoredb.marca (ID, nombreMarca, empresa) VALUES
(1,"Logitech", "Logitech"), (2,"ASUS","ASUS"), (3,"AMD","AMD Radeon Software"), (4,"G.skill","G.skill"),
(5,"Geforce now","Nvidia Corporation"), (6,"Gigabyte","Gigabyte Technologies"), (7,"Cooler Master","Cooler Master"), (8,"MAC","Apple Inc."),
(9,"Hyper-X","Kingston Technologies Company"), (10,"Intel","Intel Corporation"), (11,"ATI Radeon","AMD Radeon Software"), (12,"Crucial","Micron Technology Inc"),
(13,"PNY","PNY Technologies Inc"), (14,"Astro","Astro Gaming"), (15,"Akracing","Akracing"), (16,"Ideon","Ideon Inc."),
(17,"Samsung","Samsung"), (18,"BenQ","BenQ"), (19,"Phillips","Phillips"), (20,"Nvidia","Nvidia Corporation"),
(21,"ASRock","ASRock"), (22,"AFox","AFox"), (23,"Razer","Razer"), (24,"Corsair","Corsair Gaming Inc."),
(25,"Iphone","Apple Inc."), (26,"Cable","The Cable Company"), (27,"Western Digital","Western Digital Corp."), (28,"Aerocool","Aerocool")

-- models --
INSERT INTO fabastoredb.modelo (ID, nombreModelo, id_marca) VALUES
(1,"G502",1), (2,"B550",2), (3,"Ryzen 5 - 5600x",3), (4,"Tridentz 8gb",4), (5,"RTX 3060ti",5), (6,"RM-850",6), (7,"atx k501l",7),
(8,"Mcbook pro 2019",8), (9,"alloy elite",9), (10,"I9 LGA 2066",10), (11,"HD 5970 ",11), (12,"r9 ",11), (13,"X 399 AORUS",6), (14,"ATX b350",2),
(15,"I7 7700K",10), (16,"CT8G4DFS8266",12), (17,"HX426C16FB3/8",9), (18,"MD8GD4320016XRGB",13), (19,"Cloud Flight",9), (20,"G533",1), (21,"A50",14),
(22,"Arctica",15), (23,"Extreme Hunter Pro",16), (24,"F24T35",17), (25,"GW2480",18), (26,"243V5LHSB",19), (27,"GTX 1050 Ti",20), (28,"RX 550",21),
(29,"RX 550",22), (30,"Lightsync",1), (31,"Viper Mini",23), (32,"Surge",9), (33,"fuente de alimentación 500w",6), (34,"fuente de alimentación RM-750",24), (35,"Cable USB",25),
(36,"Ethernet 5M",26), (37,"de poder",26), (38,"Hyper 212",7), (39,"Ma610p Cpu cooler",7), (40,"Hyper 212 Turbo",7), (41,"SSD 250 Gb",17), (42,"disco duro 1 Tb",27),
(43,"ssd m.2 950 Gb",17), (44,"Gabinete",28)

-- type of product --
INSERT INTO fabastoredb.tipoDeProducto (ID, tipo_de_producto) VALUES
(1,"Mouses"), (2,"Motherboard"), (3,"Microprocesador"), (4,"Memoria RAM"), (5,"Placa de Video"),
(6,"Fuente"), (7,"Gabinetes"), (8,"Notebook"), (9,"Teclado"),
(10,"Auriculares"), (11,"Sillas Gamer"), (12,"Monitores y Televisores"), (13,"Fuentes de Poder"),
(14,"Cables"), (15,"Coolers"), (16,"Almacenamiento")

-- products --
INSERT INTO fabastoredb.productos (ID, id_modelo, id_marca, id_tipoProducto, img, precio, stockCantidad, ofertaPorcentaje, precioConOferta, especificaciones) VALUES
(1,1,1,1,"mouseG502.png",5400,1,15,0,""),
(2,2,2,2,"motherb550.png",12200,1,20,0,""),
(3,3,3,3,"ryzen5-5600X.png",31370,1,10,0,""),
(4,4,4,4,"ramGskill.png",22000,1,25,0,""),
(5,5,5,5,"Nvidia3060ti.png",182540,1,15,0,""),
(6,6,6,6,"FuenteAlimentación.png",17780,1,10,0,""),
(7,7,7,7,"Gabinete.png",8890,1,35,0,""),
(8,8,8,8,"img-macbook-pro-2019.png",200000,1,0,0,""),
(9,9,9,9,"Alloy-elite-hyperx.png",50000,1,7,0,""),
(10,10,10,3,"i9-lga-2066.png",250000,1,0,0,""),
(11,11,11,5,"Ati-radeon-5970.png",19000,1,30,0,""),
(12,12,11,5,"Ati-radeon-r9.png",84000,1,0,0,""),
(13,13,6,2,"gigabyte-399.png",75000,1,0,0,""),
(14,14,2,2,"asus-atx-b350.png",65000,1,0,0,""),
(15,15,10,3,"i7-7700k.png",150000,1,13,0,""),
(16,16,12,4,"ramGskill.png",4999,1,0,0,""),
(17,17,9,4,"Ati-radeon-5970.png",5849,1,20,0,""),
(18,18,13,4,"ramGskill.png",6530.04,1,10,0,""),
(19,19,9,10,"AuricularesHyperX.png",12999,1,25,0,""),
(20,20,1,10,"AuricularesLogitech.png",12648,1,15,0,""),
(21,21,14,10,"AuricularesAstro.png",33899,1,10,0,""),
(22,22,15,11,"SillasGamerAkracing.png",79178,1,0,0,""),
(23,23,16,11,"SillasGamerIdeon.png",35000,1,7,0,""),
(24,24,17,12,"Monitor.jpg",26000,1,0,0,""),
(25,25,18,12,"Monitor.jpg",23700,1,30,0,""),
(26,26,19,12,"Monitor.jpg",21400,1,0,0,""),
(27,27,20,5,"Nvidia3060ti.png",50000,1,0,0,""),
(28,28,21,5,"asus-atx-b350.png",40895,1,0,0,""),
(29,29,22,5,"asus-atx-b350.png",60297,1,13,0,""),
(30,30,1,1,"mouseG502.png",2449,1,13,0,""),
(31,31,23,1,"mouseG502.png",3990,1,13,0,""),
(32,32,9,1,"mouseG502.png",4700,1,13,0,""),
(33,33,6,13,"producto_1636421683043.png",6000,10,10,5400,""),
(34,34,24,13,"producto_1636421902525.png",15000,12,15,12750,""),
(35,35,25,14,"producto_1636422221549.png",500,30,0,500,""),
(36,36,26,14,"producto_1636422365467.png",760,23,10,684,""),
(37,37,26,14,"producto_1636422454791.png",350,22,0,350,""),
(38,38,7,15,"producto_1636422703828.png",7000,10,0,7000,""),
(39,39,7,15,"producto_1636422798840.png",12000,10,0,12000,""),
(40,40,7,15,"producto_1636422907323.png",15000,12,0,15000,""),
(41,41,17,16,"producto_1636423221030.png",5000,12,10,4500,""),
(42,42,27,16,"producto_1636423282426.png",7000,15,15,5950,""),
(43,43,17,16,"producto_1636423354929.png",13500,15,10,12150,""),
(44,44,28,7,"producto_1636423556561.png",8000,15,5,7600,""),

-- cart (no entendí bien la lógica de este carrito???, un carrito es un ID y solo puede almacenar un único producto? --
INSERT INTO fabastoredb.carrito_table (ID, id_producto) VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6),
(7,7),
(8,8),
(9,9),
(10,10)

-- users --
INSERT INTO fabastoredb.usuarios (ID, id_categoria, usuario, email, password, fecha, nombre, apellido, domicilio, avatar, admin, id_carrito) VALUES
(1,1,"invitado","invitado@gmail.com","$2a$10$wyIOKCmOn.Sz4q4z3WespeEbaPhmuL7zYIQdfw1Tr3Q8U7FA8W8fG","20211001","Invitado","-","anonimo","default.jpg",true,1),
(2,1,"admin","admin@gmail.com","$2a$10$wyIOKCmOn.Sz4q4z3WespeEbaPhmuL7zYIQdfw1Tr3Q8U7FA8W8fG","20211001","admin","admin","anonimo","",true,2),
(3,2,"jmilei","jmilei@gmail.com","libertadAvanza2020","20211001","Javier Gerardo","Milei","calle falsa 123","20211001",false,3),
(4,2,"Dtrump2025","dtrump@gmail.com","CHAINA-CHAINA-CHAINA","20211001","Donald","Trump","725 5th Ave, New York, NY 10022, EE. UU.","",false,4),
(5,2,"Satoshi nakamoto ","SatoshiBTC@gmail.com","BTCISNOTABUBBLE","20211001","Satoshi","Nakamoto","NADIE LO SABE Y NADIE LO SABRA","",false,5),
(6,2,"amado","amadodamis@gmail.com","$2a$10$KyJwoVkHV9DfgNnQHxBCoe1xLJqH6sonbJV5CHt/qsc2P24I07UIK","20211001","Amado","damis","asd","default.jpg",false,6),
(7,2,"Axel","axel.leonelromano@gmail.com","$2a$10$rTYLPFT7AH6xiFki8ykvAOYZUdVqxVQ31c0V9mD04pm4BsbyhoGYK","20211001","Axel","Romano","asdd","default.jpg",false,7),
(8,2,"Francisco","francisco@hotmail.com.ar","$2a$10$mCfpIfJSDO8KSV6OMCzIVeBXAu80y0fnnO.pAbv0gfWhUw6HBi792","20211001","Francisco","Xsdf","1234","default.jpg",false,8),
(9,2,"Francisco","francisco@hotmail.com","$2a$10$d2RBwWrhyVqwo9.OQ7lt7OlddQAv.xB27xC041C3sbRvW7k/Wsc02","20211001","Francisco","Moletta","asdfa","",false,9)

