import { sequelize, testConnection, School, Subject, Tutor, Student, Enrollment } from "./models/index.js";
import app from './routes/index.js';

// Test connection with PSQL
testConnection();

// // Synchronizing all models at once
// await sequelize.sync();
// console.log("All models were synchronized successfully.");

// // Drop all tables
// await sequelize.drop();
// console.log("All tables dropped!");

app.listen(3000, () => {
  console.log('Listening to port 3000...');
})