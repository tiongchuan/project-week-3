// Import sequelize
import Sequelize from "sequelize";

// DB Connection Configuration
const sequelize = new Sequelize("student_db", "postgres", "", {
    host: "localhost",
    dialect: "postgres",
  });

// Test connection function
async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return true;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
    }
  }

// Import model(s)
import schoolModel from './school.model.js'
import subjectModel from './subject.model.js' 
import tutorModel from './tutor.model.js'
import studentModel from './student.model.js'
import enrollmentModel from './enrollment.model.js'

const School = schoolModel(sequelize);
const Subject = subjectModel(sequelize);
const Tutor = tutorModel(sequelize);
const Student = studentModel(sequelize);
const Enrollment = enrollmentModel(sequelize);

Student.belongsTo(School,{foreignKey: "schoolId"});
Enrollment.belongsTo(Student,{foreignKey: "studentId"});
Enrollment.belongsTo(Tutor,{foreignKey: "tutorId"});
Enrollment.belongsTo(Subject,{foreignKey: "subjectId"});

  export {
    sequelize,
    testConnection,
    School,
    Subject,
    Tutor,
    Student,
    Enrollment
  }