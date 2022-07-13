import { sequelize, testConnection, School, Subject, Tutor, Student, Enrollment } from "./models/index.js";
import app from './routes/index.js';

// Test connection with PSQL
testConnection();

app.listen(3000, () => {
  console.log('Listening to port 3000...');
})