import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();

// Invoke update() in TutorController based on the route
router.post("/protected/tutor/update", auth, tutorController.update);

// Invoke delete() in TutorController based on the route
router.delete("/protected/tutor/delete/:tutorId", auth, tutorController.delete);

// Invoke add() in TutorController based on the route
router.put("/protected/tutor/add", auth, tutorController.add);

function auth () {
    if (req.body.role !== "ADMIN") {
        console.log("You are not the admin, you do not have the rights.");
    } else {
        console.log("You are admin");
        next ()
    }
}

export default router;