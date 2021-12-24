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

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (TypeOfProduct - Brand - Model)

    Product.associate = function(models){
        /*Product.belongsTo(models.Model, {
            as: "modelo",
            foreignKey: "id_modelo"
            }),*/
        Product.belongsTo(models.Brand, {
                as: "marca",
                foreignKey: "id_marca"
                }),
        Product.belongsTo(models.TypeOfProduct, {
            as: "tipodeproducto",
            foreignKey: "id_tipoProducto"
        })
            }

    return Product
}