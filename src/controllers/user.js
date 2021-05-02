const user = require("../models/user");
const httpResponses = require("../utils/httpResponses");


exports.createUser = (req,res,next)=>{
  try {
  res.send(httpResponses.create, message:"User created successfully");
  } catch (error) {
    console.log(error.stack);
    res.send({status:httpResponses.serverError,message:"Something has gone wrong"});
  }
}

exports.listUsers = (req,res,next)=>{
  try {
  res.send(httpResponses.success, message:"List of users");
  } catch (error) {
    console.log(error.stack);
    res.send({status:httpResponses.serverError,message: "Something has gone wrong"})
  }
}
exports.updateUser = (req,res,next)=>{
  try {
  res.send(httpResponses.success, message:"User updated successfully");
  } catch (error) {
    console.log(error.stack);
    res.send({status:httpResponses.serverError,message: "Something has gone wrong"})
  }
}

exports.deleteUser = (req,res,next)=>{
  try {
  res.send(httpResponses.success, message:"User deleted successfully");
  } catch (error) {
    console.log(error.stack);
    res.send({status:httpResponses.serverError,message: "Something has gone wrong"})
  }
}
