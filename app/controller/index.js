const ECOMMERCE_DATA = [
    {nama_barang: "Mobil Tesla", harga: 1000000, kategori_barang:"transportasi", url:"https://cdn.motor1.com/images/mgl/VA0z9/s1/4x3/tesla-roadster.webp"},
    {nama_barang: "Sepeda hadiah quiz jokowi", harga: 5000, kategori_barang:"transportasi", url:"https://asset.kompas.com/crop/0x0:780x390/780x390/data/photo/2015/08/25/0850280jersey-bunda59780x390.jpg"},
    {nama_barang: "HP ROG", harga: 500000, kategori_barang:"elektronik", url:"https://p-id.ipricegroup.com/uploaded_5c4a65dcb7eb6b79d220744b9acaddfdd1bcff9b.jpg"},
    {nama_barang: "Whiscash", harga: 2000, kategori_barang:"makanan", url:"https://cdn.onemars.net/sites/whiskas_id_xGoUJ_mwh5/image/thumb_wks_pouch_jr_mackerel-80g_f_1652272924491.png"},
    {nama_barang: "Mesin cuci", harga: 10000, kategori_barang:"elektronik", url:"https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/5/2023/07/Alt-Text-6.-Harga-Mesin-Cuci-2-Tabung-yang-Bagus-dan-Awet-Electrolux-EWS98262WA.png"}
]

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

function filter(req,res,next){
    // 3 filter
    // harga minimal
    // harga maksimal
    // kategori barang

    var hargaMinimum = parseInt(req.query.min)
    var hargaMaksimum = parseInt(req.query.max)
    var kategori = req.query.category
    console.log(hargaMinimum, hargaMaksimum, kategori)

    // untuk cek apabila user tidak pakai filter
    if(req.query.min === undefined  && req.query.max === undefined && req.query.category === undefined){
        // semua barang dimunculkan
        res.render('../views/index', {data: ECOMMERCE_DATA})
        return
    }

    if(hargaMaksimum == ""){
        hargaMaksimum = 0
    }

    if(hargaMinimum == ""){
        hargaMinimum = 0
    }

    var data = []
    for(const val of ECOMMERCE_DATA){
        if(val.harga > hargaMinimum && 
            val.harga < hargaMaksimum
        ){
            if(kategori != undefined){
                if(val.kategori_barang === kategori){
                    data.push(val)
                }
            }else{
                data.push(val)
            }
        }
    }

    res.render('../views/index', {data: data})
    return
}

function kategori(req,res,next){
    let cat = req.params.category

    var resp = []
    for(const val of ECOMMERCE_DATA){
        if(val.kategori_barang === cat){
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