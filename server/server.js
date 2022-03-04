const express = require('express');
const app = express();
const router=require("./routes/routes")
const cors=require("cors")
require("./models/db")

app.use(express.json())
app.use(cors())
app.use('/api/employees',router)

const server = app.listen(8081, (err)=> {
   if(err){
       console.log(err)
   }
   console.log("Server listening at http://%s:%s 8081" )
})