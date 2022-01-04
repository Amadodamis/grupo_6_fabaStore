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

    Category.associate = function(models){
        Category.hasMany(models.User, {
            as: "Usuarios",
            foreignKey: "id_categoria"
        })
    }
    return Category
}