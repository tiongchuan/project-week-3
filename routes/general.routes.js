import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import StudentController from "../controllers/student.controller.js";

const router = Router();

router.get("/general", (req, res) => {
    return res.send("You have called a general route");
});

// Instantiate the class
const tutorController = new TutorController();
const studentController = new StudentController();

// Invoke retrieveTutor() in TutorController based on the route
router.get("/general/tutor/:tutorId", tutorController.retrieveTutor);
router.get("/general/student/:studentId", studentController.retrieveStudent);


// Invoke retrieveTutors() in TutorController based on the route
router.get("/general/tutors", tutorController.retrieveTutors);
router.get("/general/student", studentController.retrieveStudents);


export default router;