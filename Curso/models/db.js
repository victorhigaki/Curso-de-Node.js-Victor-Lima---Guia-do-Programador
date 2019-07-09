const Sequelize = require('sequelize')

// Conexão com banco de dados MySql
const sequelize = new Sequelize('postapp', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}