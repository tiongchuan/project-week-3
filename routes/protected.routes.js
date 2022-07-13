import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import StudentController from "../controllers/student.controller.js";

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();
const studentController = new StudentController();

// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", tutorController.update);
router.post("/protected/student/update", studentController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", tutorController.delete);
router.delete("/protected/student/delete/:studentId", studentController.delete);

// // Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", tutorController.add);
router.put("/protected/student/add", studentController.add);

export default router;