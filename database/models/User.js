// Modelo para la tabla de usuarios //

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        /*id_categoria: {
            type: dataTypes.INTEGER,
        },*/
        usuario: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        domicilio: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.STRING
        }
        /*id_carrito: {
            type: dataTypes.INTEGER,
        }*/
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config)

    return User
}