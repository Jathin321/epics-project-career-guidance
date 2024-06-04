const express = require('express')
const router = express.Router()
const User = require('../modals/user.js')
const { body, validationResult} = require('express-validator');

router.post('/login',
[
    body("email","enter valid email").isEmail(),
    body("password","password must be min 5 characters").isLength({min: 5})
],
async (req,res) => {
    const err = validationResult(req); 
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    let email = req.body.email;
    let password = req.body.password;

    try{
        let userdata = await User.findOne({email})
        if(!userdata){
            return res.status(400).json({error: "Email Not Found"})
        }
        else if(password != userdata.password){
            return res.status(400).jason({error:"Wrong Password"})
        }
        else{
            return res.status(200).json({ success:true , userId:userdata.id })
        }
    }
    catch(err){
        console.log(err);
        res.json({ success : false})
    }
})

module.exports = router;