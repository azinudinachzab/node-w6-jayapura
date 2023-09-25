const express = require('express');
const router = express.Router();
const middleware = require("./middleware/rate_limiter")

/* route init */
router.get('/udin', middleware, function(req, res, next) {
    res.json({
        message: "Halo ini website jayapura!"
    })
});

router.get('/intan', middleware, function(req, res, next) {
    res.json({
        message: "Halo ini kak Intan!"
    })
});

router.get('/steven', function(req, res, next) {
    res.json({
        nama_artikel: "kaesang"
    })
});

// self assignment
// tambahkan 3 routes method get "/jayapura" -> res.json("ini jayapura") menggunakan middleware
// tambahkan 3 routes method post "/semarang" -> res.json("ini semarang") tidak menggunakan middleware
// tambahkan 3 routes method delete "/jakarta" -> res.json("ini jakarta") tidak menggunakan middleware

module.exports = router;
