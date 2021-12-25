// Modelo para la tabla de marcas //

module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreMarca: {
            type: dataTypes.STRING
        },
        empresa: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'marca',
        timestamps: false
    };
    const Brand = sequelize.define(alias, cols, config)

    //Acá creamos las relaciones con los otros modelos (Product)

    Brand.associate = function(models){
        Brand.hasMany(models.Product, {
                as: "productos",
                foreignKey: "id_marca"
                })
        /* Brand.hasMany(models.Model, {
            as: "modelo",
            foreignKey: "id_modelo"
        })*/
    }

    return Brand
}