const express = require('express');
const homeController = require('../controllers/homeController')

let router = express.Router()
let initWebRoutes = (app) =>{
    router.get('/',homeController.getHomePage)
    router.get('/book',homeController.getBookPage)
    router.post('/addbook',homeController.addBook)
    return app.use("/",router)
}

module.exports = initWebRoutes                                                                                                          