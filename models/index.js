// Importation l'object Sequelize
const { Sequelize } = require('sequelize');

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
let sequelize;
if(process.env.NODE_ENV === 'test') {
      sequelize = new Sequelize('sqlite::memory:',{// disable logging; default: console.log
        logging: false});
     
}
else{
        sequelize = new Sequelize({
        dialect: 'mssql',
        database: 'sequelizeDemo',
        username: 'node',
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        port: 1433, // Le port de base de SQL Server
        dialectOptions: {
            instanceName: 'TFTIC'
        }
    });
}

// Création de l'object db
const db = {};
// Ajout des models
db.Character = require('./character.model')(sequelize);
db.Auth = require('./auth.model')(sequelize);
db.sequelize = sequelize; 
 
module.exports = db;



