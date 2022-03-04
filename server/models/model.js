
const mongoose=require("mongoose")
const EmployeesSchema=new mongoose.Schema({
    id:String,
    firstname:String,
    lastname:String,
    dob:String,
    age:String,
    email:String,
    phone:String

})

const Employees=mongoose.model('employee',EmployeesSchema)
module.exports=Employees