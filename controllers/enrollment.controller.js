
// const enrollmentService = import("../services/enrollment.service.js");
// const enrollmentService = require("../services/enrollment.service");

import { studentInSubject, addEnrollment, getEnrollment, getEnrollments, updateEnrollment, deleteEnrollment } from "../services/enrollment.services.js";

class EnrollmentController {

async createEnrollment(req,res,next){
    // if (  
    //     typeof req.body.studentId !== "number" ||
    //     typeof req.body.tutorId !== "number" ||
    //     typeof req.body.subjectId !== "number" ||
    //     typeof req.body.comments !== "string" ||
    //     typeof req.body.latestScore !== "string" ||
    //     typeof req.body.enrollmentDate !== "string" 
    // ) {
    //     res.status(400);
    //     return res.json({ message: "Incorrect request data" });
    // }
    const result = await addEnrollment(req.body.studentId, req.body.tutorId, req.body.subjectId, req.body.comments, req.body.latestScore, req.body.enrollmentDate)
    res.status(result.status);
    return res.json({ data: result.data, message: result.message });

}


  // GET /general/tutor
    async retrieveEnrollment(req, res, next) {
    const result = await getEnrollment(req.params.enrollmentId);    
    res.status(result.status);
    return res.json({ data: result.data, message: result.message });
    } 
  
    // GET /general/tutors
    async retrieveEnrollments(req, res, next) {
      const result = await getEnrollments();    
      res.status(result.status);
      return res.json({ data: result.data, message: result.message });
    }  
    
    // POST /protected/tutor/update
    async updateEnrollment(req, res, next) {
       
      if (typeof req.params.enrollmentId !== "number") 
      {
        res.status(400);
        return res.json({ message: "Incorrect request data" });
      }
      const result = await updateEnrollment(req.body.Id, req.body.studentId, req.body.tutorId, req.body.subjectId, req.body.comments, req.body.latestScore, req.body.enrollmentDate);    
      res.status(result.status);
      return res.json({ data: result.data, message: result.message });
    }

     // DELETE /protected/tutor/delete/:tutorId
     async deleteEnrollment(req, res, next) {
        const result = await deleteEnrollment(req.params.enrollmentId);    
        res.status(result.status);
        return res.json({ data: result.data, message: result.message });
      }

    // // PUT /protected/tutor/add
    // async add(req, res, next) {

    //     if (typeof req.body.tutorId !== "number") 
    //     {
    //       res.status(400);
    //       return res.json({ message: "Incorrect request data" });
    //     }
    
    //     const result = await addTutor(req.body.tutorId, req.body.name, req.body.experience, req.body.highestEducation, req.body.hourlyRate);    
    //     res.status(result.status);
    
    //     return res.json({ data: result.data, message: result.message }); 
    //   }

























    // async deleteDriver(req, res, next) {

    //     console.log(typeof req.params.driverId);
    //     if (
    //         typeof req.params.driverId !== "number"
    //     ) {
    //         res.status(400); // bad request
    //         return res.json({ message: "Incorrect request data" });
    //     }


    //     const result = await driverService.deleteDriver(req.params.driverId);
    //     res.status(result.status);

    //     return res.json({ data: result.data, message: result.message });
    // }

    async studentInSubject(req, res, next) {
        // console.log(req.body.subject);
        console.log(typeof req.body.subject);
        if (typeof req.body.subject !== "string") {
            res.status(400); // bad request
            return res.json({ message: "Incorrect request data" });
        }

        const result = await studentInSubject(req.body.subject);
        res.status(result.status);

        return res.json({ data: result.data, message: result.message });
    }

    // async studentInfo(req,res,next){
    //     console.log(typeof req.params.name);
    //     if (typeof req.params.subject !== "string") {
    //         res.status(400); // bad request
    //         return res.json({ message: "Incorrect request data" });
    //     }

    //     const result = await enrollmentService.studentInfo(req.params.name);
    //     res.status(result.status);

    //     return res.json({ data: result.data, message: result.message });

    // }

}



export default EnrollmentController;