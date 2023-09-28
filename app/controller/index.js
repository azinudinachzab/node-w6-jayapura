const katalog = require('../model/katalog')

function udin(req, res, next) {
    res.json({
        message: "Halo ini website jayapura!"
    })
    return
}

function intan(req, res, next) {
    res.json({
        message: "Halo ini kak Intan!"
    })
    return
}

function steven(req, res, next) {
    res.json({
        nama_artikel: "kaesang"
    })
}

function tambah(req, res, next) {
    let hasil = req.body.angka1 + req.body.angka2
    res.json({
        hasil: hasil
    })
}

function filter(req, res, next) {
    // 3 filter
    // harga minimal
    // harga maksimal
    // kategori barang

    var hargaMinimum = parseInt(req.query.min)
    var hargaMaksimum = parseInt(req.query.max)
    var kategori = req.query.category
    console.log(hargaMinimum, hargaMaksimum, kategori)

    katalog.findAll()
        .then(function (data) {
            const ecommerceData = data
            // untuk cek apabila user tidak pakai filter
            if (req.query.min === undefined && req.query.max === undefined && req.query.category === undefined) {
                // semua barang dimunculkan
                res.render('../views/index', {
                    data: ecommerceData
                })
                return
            }

            if (hargaMaksimum == "") {
                hargaMaksimum = 0
            }

            if (hargaMinimum == "") {
                hargaMinimum = 0
            }

            var data = []
            for (const val of ecommerceData) {
                if (val.harga > hargaMinimum &&
                    val.harga < hargaMaksimum
                ) {
                    if (kategori != undefined) {
                        if (val.kategori === kategori) {
                            data.push(val)
                        }
                    } else {
                        data.push(val)
                    }
                }
            }

            res.render('../views/index', {
                data: data
            })
        })
        .catch(function (err) {
            res.json({
                error: err
            })
        })
}

function kategori(req, res, next) {
    let cat = req.params.category

    var resp = []
    for (const val of ECOMMERCE_DATA) {
        if (val.kategori_barang === cat) {
            resp.push(val)
        }
    }

    res.json(resp)
}


module.exports = {
    udin,
    intan,
    steven,
    tambah,
    filter,
    kategori,
}