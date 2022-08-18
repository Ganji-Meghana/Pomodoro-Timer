const jwt=require('jsonwebtoken')
require("dotenv").config()

//to verify token so that it can be sent to private route
const verifyToken=(request, response, next)=>{
    let bearerToken = request.headers.authorization
    if(bearerToken===undefined) {
        response.send({message:"Unauthorized request"})
    }
    let token=bearerToken.split(" ")[1]
    if(token===null) {
        response.send({message:"Unauthorized request"})
    }
    try {
    jwt.verify(token,process.env.SECRET_KEY)
    next()
    }
    catch(err) {
        response.send({message:"Session expired. Please login again"})
    }
}

module.exports=verifyToken