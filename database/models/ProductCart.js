// Modelo para la tabla de carrito de compras //

module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        /*id_producto: {
            type: dataTypes.INTEGER,
        }*/
    };
    let config = {
        tableName: 'carrito_table',
        timestamps: false
    };
    const Cart = sequelize.define(alias, cols, config)

    return Cart
}