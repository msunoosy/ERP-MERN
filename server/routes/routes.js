const express=require("express")
const Employees = require("../models/model")
const router =express.Router()


router.get("/",(req,res)=>{
  Employees.find((err,doc)=>{
      if(err)console.log(err)
      res.json(doc)
  })
})


router.post('/',(req,res)=>{
    const employee=new Employees(req.body)
    employee.save((err,doc)=>{
        if(err) console.log(err)
        res.json(doc)
    })

router.delete('/:id',(req,res)=>{
    Employees.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err)console.log(err)
        res.json(doc)
    })
})


})

module.exports=router