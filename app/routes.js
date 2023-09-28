const express = require('express');
const router = express.Router();
const middleware = require("./middleware/rate_limiter")
const controller = require("./controller/index")
const controllerUser = require("./controller/user")

/* route init */
router.get('/udin', middleware, controller.udin);

router.get('/intan', middleware, controller.intan);

router.get('/steven', controller.steven);

router.post('/tambah', controller.tambah)

router.get('/filter', controller.filter)

router.get('/kategori/:category', controller.kategori)

router.get('/user', controllerUser.getUser)
router.post('/user', controllerUser.addUser)
router.put('/user', controllerUser.editUser)
router.delete('/user', controllerUser.deleteUser)

// self assignment
// tambahkan 3 routes method get "/jayapura" -> res.json("ini jayapura") menggunakan middleware
// tambahkan 3 routes method post "/semarang" -> res.json("ini semarang") tidak menggunakan middleware
// tambahkan 3 routes method delete "/jakarta" -> res.json("ini jakarta") tidak menggunakan middleware

// self assignment 2
// bisa routes dan controller untuk operasi kurang, kali dan bagi

module.exports = router;
