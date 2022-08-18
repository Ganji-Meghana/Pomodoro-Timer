const verifyToken=require('../APIS/Middlewares/verifyToken')
const exp = require("express");
const userApp = exp.Router();
const  expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs");
const res = require("express/lib/response");
const jwt=require("jsonwebtoken")
require('dotenv').config()


var cloudinary=require("cloudinary").v2
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const multer=require("multer")

//to extract body of request object
userApp.use(exp.json());

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "e-commerce",
      public_id: file.fieldname + "-" + Date.now(),
    };
  },
});

//configure multer
var upload = multer({ storage: cloudinaryStorage });

//to extract body of request object
userApp.use(exp.json());
userApp.use(exp.urlencoded());
//get all users
userApp.get("/getusers",verifyToken, expressAsyncHandler(async(request,response)=>{
  let userCollectionObject=request.app.get("userCollectionObject")
  let users=await userCollectionObject.find().toArray()
  response.send({message:"Users list", payload:users})  
}));


//get user by id
userApp.post("/login", expressAsyncHandler(async (request,response)=>{
  let userCollectionObject=request.app.get("userCollectionObject")
  let userCredObj=request.body
  let userofDB=await userCollectionObject.findOne({username:userCredObj.username})
  if(userofDB==null)
    response.send({message:"Invalid user"})
  else {
    let status=await bcryptjs.compare(userCredObj.password, userofDB.password)
    if(status==false)
      response.send({message:"Invalid password"})
    else {
      let token= jwt.sign({username:userofDB.username}, process.env.SECRET_KEY, {expiresIn:60})
      response.send({message:"success", payload:token,userObj:userofDB})
    }  
  }  

}))

//create a route to 'create-user'
userApp.post(
  "/create-user",
  upload.single("photo"),
  expressAsyncHandler(async (request, response) => {
    //get link from cloudinary
    console.log(request.file.path);
      //get userCollectionObject
       let userCollectionObject = request.app.get("userCollectionObject");
   //    get userObj as string from client and convert into object
      let newUserObj = JSON.parse(request.body.userObj);
      //seacrh for user by username
//      let newUserObj=request.body
      let userOfDB = await userCollectionObject.findOne({
        username: newUserObj.username,
      });
      //if user existed
      if (userOfDB !== null) {
        response.send({
          message: "Username has already taken..Plz choose another",
        });
      }
      //if user not existed
      else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
        //replace plain password with hashed password in userOfDB
        newUserObj.password = hashedPassword;
        //add profile image link to userOfDB
        newUserObj.profileImg=request.file.path;
        //removw photo property
        delete newUserObj.photo;
        //insert newUser
        await userCollectionObject.insertOne(newUserObj);
        //send response
        response.send({ message: "New User created" });
      }
  })
);
  //update product
userApp.put('/update-user', expressAsyncHandler(async(request,response)=>{
}))

userApp.delete("/remove-user/:id", expressAsyncHandler(async(request, response)=> {  

}))

module.exports = userApp;

