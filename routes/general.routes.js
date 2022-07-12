import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";

const router = Router();

router.get("/general", (req, res) => {
    return res.send("You have called a general route");
});

// Instantiate the class
const tutorController = new TutorController();

// Invoke retrieveTutor() in TutorController based on the route
router.get("/general/tutor/:tutorId", tutorController.retrieveTutor);

// Invoke retrieveTutors() in TutorController based on the route
router.get("/general/tutors", tutorController.retrieveTutors);

export default router;