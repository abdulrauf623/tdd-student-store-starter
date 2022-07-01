// YOUR CODE HERE


const express = require("express")


const cors = require("cors")

const morgan = require('morgan')

const app = express()
app.use(cors())

const store = require("/Users/abdul.karim/studentStorePROJECT/models/Store")

const { NotFoundError } = require("../utils/errors")

app.use(morgan("tiny"))


const stores = require("/Users/abdul.karim/studentStorePROJECT/routes/store")


app.use(express.json())



app.use("/store", stores)







app.get("/", async(req, res, next) => {

    


    res.status(200).json({ping : "pong"})
})


app.use((req, res, next) => {


    return next(new NotFoundError())

})


app.use((err, req, res, next) => {


    const status = err.status

    const message = err.message

    return res.status(status).json({


        error : {message, status}
    })


})




module.exports = app