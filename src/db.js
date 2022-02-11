const { Sequelize } = require("sequelize");

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

database
    .authenticate()
    .then(() => console.log("Banco CONECTADO!!!!"))
    .catch(() => console.error("Não foi possível conectar ao BANCO"));

    
module.exports = {
    database
};