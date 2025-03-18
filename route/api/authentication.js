const express = require("express");
const route = express.Router()


route.get("/registration", (req,res)=>{
    res.json({message: "registion asteche"})
})

module.exports = route;