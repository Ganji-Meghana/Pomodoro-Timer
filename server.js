//create express app
const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient
const path=require('path')
//config returns process object
require('dotenv').config() 
//connect buid with nodejs. Build will convert react in jsx to js so that we can connect it with backend
app.use(exp.static(path.join(__dirname, './build')))

const dbUrl = process.env.DATABASE_CONNECTION_URL


mclient.connect(dbUrl)
.then((client)=>{
  let dbObj=client.db("ecommerce_db")
  let userCollectionObject=dbObj.collection("usercollection")
//  let productCollectionObject=dbObj.collection("productcollection")

  app.set("userCollectionObject", userCollectionObject)
//  app.set("productCollectionObject", productCollectionObject)
  console.log('DB connection successfull')
})
.catch(err=>console.log('Error in db connection', err))

//import userApp and productApp
const userApp = require("./APIS/userApi");
//const productApp = require("./APIS/productApi");


//excute specific middleware based on path
app.use("/user-api", userApp);
//app.use("/product-api", productApp);

app.use('*', (request, respone)=> {
  respone.sendFile(path.join(__dirname, './build/index.html'))
})
//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

const port=process.env.PORT
//assign port number
app.listen(port, () => console.log(`server listening on port ${port}`));