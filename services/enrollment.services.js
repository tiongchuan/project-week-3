

// const { enrollmentModel } = import("../models/index.js");
import { Enrollment, Subject, Student } from "../models/index.js";
// import studentModel from "../models/student.model.js";

// const { enrollmentModel } = require("../models");


async function addEnrollment(studentId, tutorId, subjectId, comments, latestScore, enrollmentDate) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.create({studentId, tutorId, subjectId, comments, latestScore, enrollmentDate});
    enrollment.studentId = studentId;
    enrollment.tutorId = tutorId;
    enrollment.subjectId = subjectId;
    enrollment.comments = comments;
    enrollment.latestScore = latestScore;

  
await enrollment.save();
  result.data = enrollment;
  result.status = 200;
  result.message = "New user is registered sucessfully";
  return result;
}



async function getEnrollment(enrollmentId) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  result.data = enrollment;
  result.status = 200;
  result.message = "Retrieve successful";
  return result;
}

async function getEnrollments() {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollments = await Enrollment.findAll();
  result.data = enrollments;
  result.status = 200;
  result.message = "Retrieve successful";
  return result;
}

async function updateEnrollment(enrollmentId, studentId, tutorId, subjectId, comments, latestScore, enrollmentDate) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  enrollment.Id = Id;
  enrollment.studentId = studentId;
  enrollment.tutorId = tutorId;
  enrollment.subjectId = subjectId;
  enrollment.comments = comments;
  enrollment.latestScore = latestScore;
  enrollment.enrollmentDate - enrollmentDate;
  await enrollment.save();
  result.data = enrollment;
  result.status = 200;
  result.message = "Update successful";
  return result;
}


async function deleteEnrollment(enrollmentId) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  await enrollment.destroy();
  result.data = enrollment;
  result.status = 200;
  result.message = "Delete successful";
  return result;
}

// async function addTutor(name, experience, highestEducation, hourlyRate) {

//     let result = {
//         message: null,
//         status: null,
//         data: null,
//     };

//     const tutor = await Tutor.findByPk();

//     tutor.name = name;
//     tutor.experience = experience;
//     tutor.highestEducation = highestEducation;
//     tutor.hourlyRate = hourlyRate;

//     await tutor.save();
//     result.data = tutor;
//     result.status = 200;
//     result.message = "Add successful";

//     return result;
// }


























async function studentInSubject(name) {
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const subject1 = await Subject.findOne({ where: { name: name } });
  const subjectId = subject1.id
  console.log(subjectId);

  // const enrollmentSubject = await enrollmentModel.findAll({subjectId:`${subject}`})

  const enrollmentSubject = await Enrollment.findAll({ where: { subjectId: subjectId } })

  enrollmentSubject.forEach()

  const studentId = enrollmentSubject.studentId;
  console.log(studentId);


  // const studentEnrolled = await Student.findByPk(enrollmentSubject.studentId)

  // const studentEnrolledtData = JSON.stringify(studentEnrolled);
  // result.data = studentEnrolledtData;
  // result.data = JSON.stringify(subject1);
  result.data = JSON.stringify(enrollmentSubject)
  result.status = 200;
  result.message = `students enrolled in `;
  return result

  // const result = await Vehicle.findAll({ include: Driver });
  // console.log(JSON.stringify(result));

}

// studentInfo: async (name) => {
//   let result = {
//     message: null,
//     status: null,
//     data: null,
//   };

//   const student = await Enrollment.findOne({where: {name: name}})
//   const studentData = JSON.stringify(student);
//   result.data = studentData;
//   result.status = 200;
//   result.message = `data of ${name}`;
//   return result

// }

export {

  studentInSubject,
  addEnrollment,
  getEnrollment,
  getEnrollments,
  updateEnrollment,
  deleteEnrollment
}



