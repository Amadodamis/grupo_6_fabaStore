// Modelo para la tabla de categorías //

module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoría: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'categoria',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config)

    return Category
}