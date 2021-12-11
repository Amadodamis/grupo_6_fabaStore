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

    return Brand
}