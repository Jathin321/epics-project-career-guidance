const express = require('express')
const router = express.Router()

router.post('/fieldsdata',(req,res) => {
    try{
        res.send([global.fieldsdata])
    }
    catch(err){
        console.log("server error")
    }
})

module.exports = router;