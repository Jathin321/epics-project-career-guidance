const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const User = require('../modals/user.js')

router.post('/addfav',

async (req,res) => {

    const { email, roleName, fieldName } = req.body;
    const mongoURI = 'mongodb://Jathin:12345@ac-2xtlgsq-shard-00-00.gtvaj6w.mongodb.net:27017,ac-2xtlgsq-shard-00-01.gtvaj6w.mongodb.net:27017,ac-2xtlgsq-shard-00-02.gtvaj6w.mongodb.net:27017/Career_guidance?ssl=true&replicaSet=atlas-3gtfc7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

    if (!email || !roleName ) {
        console.log(roleName)
        return res.status(400).send('email and roleName are required');
    }

    try {
        await mongoose.connect(mongoURI);
        const result = await mongoose.connection.db.collection('users').findOneAndUpdate(
            { email: email },
            { $addToSet: { favorites: {role : roleName, field : fieldName}} },
            { returnOriginal: false }
        )
        .then(
            () => {
                res.status(200).send({success : true})
            }
        )

        // console.log(result)
        // if (result.ok == 1) {
        //     // Operation was successful
        //     console.log('Item added to favorites successfully');
        //     res.status(200).send('Item added to favorites');
        // } else {
        //     // Operation failed
        //     console.error('Failed to add item to favorites');
        //     res.status(500).send('Failed to add item to favorites');
        // }
    } catch (error) {
        console.error('Error adding item to favorites', error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;