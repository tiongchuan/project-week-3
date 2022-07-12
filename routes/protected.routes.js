import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();

// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", tutorController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", tutorController.delete);

// Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", tutorController.add);

export default router;