const connection = require('./index')
const sequelize = require('sequelize')

const user = connection.define("user", {
    nik: {type: sequelize.DataTypes.STRING, primaryKey: true},
    nama: {type: sequelize.DataTypes.STRING},
    alamat: {type: sequelize.DataTypes.TEXT},
    username: {type: sequelize.DataTypes.STRING},
    password: {type: sequelize.DataTypes.STRING},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = user