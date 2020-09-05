const {PythonShell} = require('python-shell')

const express = require("express");
const router = express.Router();
const options = require("../data/options");
router.get("/", async (req, res)=>{
   PythonShell.run(__dirname+'/model.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});

    try{
        res.send(options);
    }
    catch(e){
        console.error(error.message)
    }
})

module.exports = router;