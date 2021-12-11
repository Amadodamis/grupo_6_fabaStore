// Modelo para la tabla de tipo de producto //

module.exports = (sequelize, dataTypes) => {
    let alias = 'TypeOfProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_de_producto: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'tipodeproducto',
        timestamps: false
    };
    const TypeOfProduct = sequelize.define(alias, cols, config)

    return TypeOfProduct
}