const express = require('express')
const router = express.Router()

router.post('/rolesdata',(req,res) => {
    try{
        res.send([global.rolesdata])
    }
    catch(err){
        console.log("server error")
    }
})

module.exports = router;