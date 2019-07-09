const Sequelize = require('sequelize');
const sequelize = new Sequelize('test1', 'root', 'password', {
    host: "localhost",
    dialect: "mysql",
});

// sequelize.authenticate().then(function () {
//     console.log("Conectado!")
// }).catch(function (erro) {
//     console.log("Falha ao se conectar: " + erro)
// });

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({ force: true })

// Postagem.create({
//     titulo: "UM TÍTULO QUALQUER",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobreNome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({ force: true })

Usuario.create({
    nome: "Victor",
    sobreNome: "Lima",
    idade: 20,
    email: "test@email.com"
})
