const user = require("../models/user");
const httpResponses = require("../utils/httpResponses");


exports.createUser = (req,res,next)=>{
  try {
  res.send(httpResponses.success, message:"User created successfully");
  } catch (error) {
    res.send({status:})
  }
}
