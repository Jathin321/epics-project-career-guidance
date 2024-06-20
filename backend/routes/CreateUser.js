const express = require('express')
const router = express.Router()
const User = require('../modals/user.js')
const { body, validationResult} = require('express-validator');

router.post('/createuser',
[
    body("name","name should be min 5 characters").isLength({min :5}),
    body("email","enter valid email").isEmail(),
    body("password","password must be min 5 characters").isLength({min :5})
],

async (req,res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }

    try{
        await User.create({
            surname: req.body.surname,
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password,
            email: req.body.email,
            country: req.body.country,
            state: req.body.state
        });
        res.json({ success: true, msg: "Thank you Creating account" })
    }
    catch(err){
        console.log(err);
        res.json({ success: false })
    }
})

module.exports = router;