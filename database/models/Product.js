// Modelo para la tabla de productos //

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_modelo: {
            type: dataTypes.INTEGER,
        },
        id_marca: {
            type: dataTypes.INTEGER,
        },
        id_tipoProducto: {
            type: dataTypes.INTEGER,
        },
        img: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.STRING
        },
        stockCantidad: {
            type: dataTypes.STRING
        },
        ofertaPorcentaje: {
            type: dataTypes.INTEGER
        },
        precioConOferta: {
            type: dataTypes.INTEGER
        },
        especificaciones: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    return Product
}