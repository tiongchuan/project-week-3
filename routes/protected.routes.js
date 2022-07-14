import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';
import { isAuth } from '../services/isAuth.services.js'

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();
const subjectController = new SubjectController();


// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", isAuth, tutorController.update);
router.post("/protected/subject/update", isAuth, subjectController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", isAuth, tutorController.delete);
router.delete("/protected/subject/delete/:subjectId", isAuth, subjectController.delete);

// // Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", isAuth, tutorController.add);
router.put('/protected/subject/add', isAuth, subjectController.add)

export default router;