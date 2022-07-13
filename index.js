import { sequelize, testConnection, School, Subject, Tutor, Student, Enrollment } from "./models/index.js";

// Test connection with PSQL
testConnection();

// // Synchronizing all models at once
// await sequelize.sync();
// console.log("All models were synchronized successfully.");

// // Drop all tables
// await sequelize.drop();
// console.log("All tables dropped!");

// Addition (Remember IIFE?)
(async () => {

    // Create
    // const newSchool = await School.create({name:"Gan Eng Seng", area:"Tiong Baru", schoolCode:"1234", type:"goverment", funding:"goverment"});

    // // Update 
    // newSchool.type = "";
    // await newSchool.save();

    // // Delete 
    // await newSchool.destroy();

    // const results = await School.findAll();
    // console.log(JSON.stringify(results));
   
  })();




//   const express = require('express')
//   const app = express()
//   app.use(express.json());

//   app.get('/', function (get, res) {
//     res.send('hello world')
// })

// const port = process.env.PORT || 3000;
// app.listen(port);



// const app = import('./routes/index.js');

import app from "./routes/index.js"

app.listen(3000, () => {
  console.log('Listening to port 3000...');
})




// const app = require('./routes');
// app.listen(3000, () => {
//   console.log('Listening to port 3000...');
// })