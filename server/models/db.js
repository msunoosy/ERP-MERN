const mongoose=require("mongoose");
module.exports=mongoose.connect("mongodb+srv://root:root@cluster0.qslcw.mongodb.net/employeedatabase?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    
},err=>{
    if(err)console.log(err)
    console.log("Db connection sucess")
})