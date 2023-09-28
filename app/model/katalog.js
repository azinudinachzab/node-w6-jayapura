const connection = require('./index')
const sequelize = require('sequelize')

const katalog = connection.define("katalog", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama: {type: sequelize.DataTypes.STRING},
    kategori: {type: sequelize.DataTypes.STRING},
    harga: {type: sequelize.DataTypes.DECIMAL},
    url: {type: sequelize.DataTypes.TEXT},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = katalog