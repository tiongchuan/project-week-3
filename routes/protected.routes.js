import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();
const subjectController = new SubjectController();



// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", auth, tutorController.update);
router.post("/protected/subject/update", subjectController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", auth, tutorController.delete);
router.delete("/protected/subject/delete/:subjectId", auth, subjectController.delete);

// Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", auth, tutorController.add);
router.put('/protected/subject/add', auth, subjectController.add)

function auth () {
    if (req.body.role !== "ADMIN") {
        console.log("You are not the admin, you do not have the rights.");
    } else {
        console.log("You are admin");
        next ()
    }
}

export default router;