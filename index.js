const express = require("express") // ini perlu
const path = require('path'); //tidak perlu npm install
const connection = require('./app/model/index')

// init express server and router
const app = express();
const mainRouter = require('./app/routes');

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

// http router
app.use("/", mainRouter);

// static router
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, './static'))

const port = 3000
app.listen(port, function(){
    console.log("server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})
