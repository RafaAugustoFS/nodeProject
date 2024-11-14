const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('cliente',{
    nome_cliente:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }
})
module.exports = Cliente;