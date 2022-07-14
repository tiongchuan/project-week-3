import { sequelize, testConnection, School, Subject, Tutor, Student, Enrollment } from "./models/index.js";
import app from './routes/index.js';

// Test connection with PSQL
testConnection();


const port = process.env.PORT || 3000;
app.listen(port);


app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
})


//     // Update 
//     newSchool.type = "";
//     await newSchool.save();

//     // Delete 
//     await newSchool.destroy();

//     const results = await School.findAll();
//     console.log(JSON.stringify(results));
   
//   })();

app.listen(3000, () => {
  console.log('Listening to port 3000...');
})

