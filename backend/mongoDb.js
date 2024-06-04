const mongoose = require('mongoose')
const mongoURI = 'mongodb://Jathin:12345@ac-2xtlgsq-shard-00-00.gtvaj6w.mongodb.net:27017,ac-2xtlgsq-shard-00-01.gtvaj6w.mongodb.net:27017,ac-2xtlgsq-shard-00-02.gtvaj6w.mongodb.net:27017/Career_guidance?ssl=true&replicaSet=atlas-3gtfc7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

const mongoDb = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDb connected...");

        const fetched_data = await mongoose.connection.db.collection("sample_data").find({}).toArray(async (err)=>{
            if(err) console.log("fetch error : ",err);
        })
        global.rolesdata = fetched_data;
        console.log("data is : ",fetched_data)
    }
    catch(error){
        console.log("MongoDB connection error:", error);
    }
}

module.exports = mongoDb;