

import express from 'express';
import EnrollmentController from '../controllers/enrollment.controller.js';


const router = express.Router();
const enrollmentController = new EnrollmentController();


router.put("/protected/enrollment",enrollmentController.createEnrollment);
router.post("/protected/enrollment/:enrollmentId",enrollmentController.updateEnrollment);
router.delete("/protected/enrollment/:enrollmentId",enrollmentController.deleteEnrollment);



export default router;