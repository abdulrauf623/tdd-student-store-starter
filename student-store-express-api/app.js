// YOUR CODE HERE


const express = require("express")


const cors = require("cors")

const morgan = require('morgan')

const app = express()
app.use(cors())

const store = require("/Users/abdul.karim/studentStorePROJECT/models/Store")

app.use(morgan("tiny"))


const stores = require("/Users/abdul.karim/studentStorePROJECT/routes/store")


app.use(express.json())



app.use("/store", stores)







app.get("/", async(req, res, next) => {

    


    res.status(200).json({ping : "pong"})
})


module.exports = app