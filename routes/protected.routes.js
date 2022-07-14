


import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import EnrollmentController from '../controllers/enrollment.controller.js';

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();
const enrollmentController = new EnrollmentController();

// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", tutorController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", tutorController.delete);

// Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", tutorController.add);


router.put("/protected/enrollment",enrollmentController.createEnrollment);
router.post("/protected/enrollment/:enrollmentId",enrollmentController.updateEnrollment);
router.delete("/protected/enrollment/:enrollmentId",enrollmentController.deleteEnrollment);


export default router;