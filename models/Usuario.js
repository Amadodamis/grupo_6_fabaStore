const fs = require ("fs");

const usuario = {
    fileName: "../data/usersDataBase.json",
    
    getData: function () { //devuelve el array de usuarios 
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"))
    },

    findAll: function () {//devuelve el array de usuarios
        return this.getData();
    },
    findByPk: function (id) { //busca un usuario por el ID en la lista de usuarios
        let allUsers = this.findAll();
        let userFound = allUsers.find (oneUser => oneUser.id === id );
        return userFound;
    },
    findByEmail:function(email){
        let allUsers=this.findAll();
        let userFound=allUsers.find(oneUser=>oneUser.email===email)
        return userFound;
    },
}

module.exports = usuario;