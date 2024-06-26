const express = require('express');
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes= require('./routes/web');
const app = express();
const connection = require('./config/database');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;



app.use(express.json( )); 
app.use(express.urlencoded({extended:true} )); 

configViewEngine(app);

app.use('/',webRoutes);


// simple query 
// connection.query(
//   'SELECT * FROM Users  ',
//   function (err,results,fields){
//     console.log(">>>results= ",results);
   
//   }
// )

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})