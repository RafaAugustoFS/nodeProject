const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Conta = require('./conta');

const Transacao = sequelize.define('transacao',{
    id_conta:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Conta,
            key:"id"
        }
    },
    tipo_conta:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_transacao:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    data_transacao:{
        type: DataTypes.DATE,
        allowNull:false
    }
})
module.exports = Transacao;