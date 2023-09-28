const user = require('../model/user')

function getUser(req, res, next) {
    const nik = req.query.nik
    let apakahAmbilSemua = false
    
    if(nik === undefined){
        apakahAmbilSemua = true
    }

    if(apakahAmbilSemua === true){
        user.findAll()
        .then(function(data){
            res.status(200).json({
                data: data
            })
        })
        .catch(function(err){
            res.status(500).json({
                error: err,
            })
        })
    }else{
        user.findOne({
            where: {
                nik: nik
            }
        })
        .then(function(data){
            res.status(200).json({
                data: data
            })
        })
        .catch(function(err){
            res.status(500).json({
                error: err,
            })
        })
    }
}

function addUser(req, res, next) {
    user.create({
        nik: req.body.nik,
        nama: req.body.nama,
        alamat: req.body.alamat,
        username: req.body.username,
        password: req.body.password
    })
    .then(function(){
        res.status(201).json({
            message: "user berhasil ditambahkan"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
}

function editUser(req, res, next) {
    user.update({alamat: req.body.alamat}, {
        where: {
            nik: req.body.nik
        }
    })
    .then(function(){
        res.status(200).json({
            message: "user berhasil diedit"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
}

function deleteUser(req, res, next) {
    user.destroy({
        where: {
            nik: req.body.nik
        }
    })
    .then(function(){
        res.status(200).json({
            message: "user berhasil dihapus"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
}

module.exports = {
    getUser,
    addUser,
    editUser,
    deleteUser
}