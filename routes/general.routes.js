import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';

const router = Router();

router.get("/general", (req, res) => {
    return res.send("You have called a general route");
});

// Instantiate the class
const tutorController = new TutorController();
const subjectController = new SubjectController()

// Invoke retrieveTutor() in TutorController based on the route
router.get("/general/tutor/:tutorId", tutorController.retrieveTutor);
router.get("/general/subject/:subjectId", subjectController.retrieveSubject);


// Invoke retrieveTutors() in TutorController based on the route
router.get("/general/tutors", tutorController.retrieveTutors);
router.get('/general/subject', subjectController.retrieveSubjects)

export default router;