const storage = require("/Users/abdul.karim/studentStorePROJECT/student-store-express-api/data/storage")

const { BadRequestError } = require("../utils/errors")



class Store {



    static getProducts(){



        console.log("Stor,", storage.storage.get("products").value())



        // return storage.get("products")


        return storage.storage.get("products").value()





    }


    static getProductById(productsId){









        return storage.storage.get("products").value()[productsId - 1]







    }


    static handlePurchases(purchase){

        let free = 0;


        console.log("Purchases")

       

        let object = storage.storage.get("purchases").value()


    



        let id = object.length + 1

        let name;

        let email;


        let order;


        let current = new Date();


        let currentTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()



        


       


        if (purchase.user.name && purchase.user.email && purchase.shoppingCart){

            name = purchase.user.name

            email = purchase.user.email


            order = purchase.shoppingCart


        }
        


        let item = {

            "id" : id,

            "name" : name, 

            "email" : email,

            "order" : order,


            "total" : 0,

            

            "createdAt" : currentTime








        }


        console.log("Purchase", purchase)


       



        console.log("Purchases array" , object)


        object.push(item)


        console.log("Did it push on top? ", object)



        let set = storage.storage.set("purchases", object)


        set.write()



     



        return {"purchase" : storage.storage.get("purchases").value() }







    }



















}



module.exports = Store