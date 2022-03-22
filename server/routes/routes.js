const express = require("express")
const Employees = require("../models/model")
const router = express.Router()


router.get("/", (req, res) => {
    if (req.query.email) {
        Employees.find({ email: req.query.email }, (err, doc) => {
            if (err) console.log(err)
            res.json(doc)
        })
    } else {
        Employees.find((err, doc) => {
            if (err) console.log(err)
            res.json(doc)
        })
    }
})


router.post('/', (req, res) => {
    
    Employees.find((err, doc) => {
        if(doc){
            req.body.id = doc?.length +1;
            const employee = new Employees(req.body)
            employee.save((err, doc) => {
                if (err) console.log(err)
                res.json(doc)
            })
        }
    })
   
})

router.delete("/:id", (req, res) => {
    Employees.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.put('/:_id', (req, res) => {
    Employees.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

module.exports = router