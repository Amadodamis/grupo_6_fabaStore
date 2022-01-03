// Modelo para la tabla de categorías //

module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoria: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'categoria',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config)
    //Acá creamos las relaciones con los otros modelos (Brand)
    Category.associate= function(models){
        Category.hasMany(models.User,{
            as:"usuarios",
            foreignKey:"id_categoria"
        })

   }
    

    return Category
}