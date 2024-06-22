const express = require('express')
const app = express()
const port = 9999
const mongoDb = require('./mongoDb')
mongoDb();


try{
  app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
}
catch(err){
  console.log("CORS_SYJ_ERROR : "+ err);
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/rolesdata', (req,res) => {
  res.send(global.rolesdata)
})

app.use(express.json())
app.use('/api',require('./routes/FieldsData.js'))
app.use('/api',require('./routes/RolesData.js'))
app.use('/api',require('./routes/CreateUser.js'))
app.use('/api',require('./routes/Login.js'))
app.use('/api',require('./routes/GetUser.js'))
app.use('/api',require("./routes/AddFav.js"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})