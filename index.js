import { sequelize, testConnection, School, Subject, Tutor, Student, Enrollment } from "./models/index.js";

// Test connection with PSQL
testConnection();

// Synchronizing all models at once
await sequelize.sync();
console.log("All models were synchronized successfully.");

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