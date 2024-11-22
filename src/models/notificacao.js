const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente');

const Notificacao = sequelize.define('notificacao',{
    id_cliente:{
        type: DataTypes.INTEGER,
        references:{
            model:Cliente,
            key:"id",
        },
        allowNull: false
    },
    mensagem:{
        type: DataTypes.STRING,
        allowNull:false
    },
    data_notificacao:{
        type: DataTypes.DATE,
        allowNull: false
    }
});
module.exports = Notificacao;