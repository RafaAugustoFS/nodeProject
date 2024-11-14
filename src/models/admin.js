const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define('admin', {
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(70),
        allowNull: false
    },
    idade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Admin;