const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');

const Conta = sequelize.define('conta',{
    id_cliente:{
        type: DataTypes.INTEGER,
        references:{
            model:Cliente,
            key:"id",
        },
        allowNull: false
    },
    saldo:{
        type: DataTypes.DOUBLE,
        allowNull: false
    }
})
module.exports = Conta;