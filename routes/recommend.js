
const express = require("express");
const router = express.Router();
const options = require("../data/options");
router.get("/", async (req, res)=>{
  
    try{
        res.send(options);
    }
    catch(e){
        console.error(e.message)
    }
})

module.exports = router;