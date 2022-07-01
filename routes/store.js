const express = require("express")


const store = express.Router()




const studentStore = require("/Users/abdul.karim/studentStorePROJECT/models/Store")

const { BadRequestError, NotFoundError } = require("../utils/errors");




store.get("/" , async (req, res, next) => {


    console.log("Store", studentStore.getProducts())


    let object = { "products" : studentStore.getProducts()}


    res.status(200).json(object)

})



store.get("/:productId", async(req, res, next) => {




    let object = {"product" : studentStore.getProductById(req.params.productId)}



    res.status(200).json(object)
})



store.post("/", (req, res, next) => {

    const body = req.body



    console.log("Body? ", body)


    if (!body.user.name || !body.user.email || !body.shoppingCart){

        return next(new BadRequestError())
    }

    const object = studentStore.handlePurchases(body)


    res.status(200).json(object)


})

module.exports = store