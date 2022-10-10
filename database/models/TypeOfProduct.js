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
        tableName: 'tipoDeProducto',
        timestamps: false
    };
    const TypeOfProduct = sequelize.define(alias, cols, config)

    //Acá creamos las relaciones con los otros modelos (Brand)

    TypeOfProduct.associate = function(models){
        TypeOfProduct.hasMany(models.Product, {
            as: "productos",
            foreignKey: "id_TipoProducto"
        })
    }

    return TypeOfProduct
}