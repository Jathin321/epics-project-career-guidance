const express = require('express')
const router = express.Router()

router.post('/getuser',(req,res) => {
    try{
        res.send([global.user_data])
    }
    catch(err){
        console.log("server error")
    }
})

module.exports = router;