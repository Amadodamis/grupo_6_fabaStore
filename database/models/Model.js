// Modelo para la tabla de carrito de modelos de productos //

module.exports = (sequelize, dataTypes) => {
    let alias = 'Model';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreModelo: {
            type: dataTypes.STRING
        },
        id_marca: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'modelo',
        timestamps: false
    };
    const Model = sequelize.define(alias, cols, config)

    return Model
}