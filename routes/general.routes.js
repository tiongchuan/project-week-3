
// const express = import('express');

import express from 'express';
const router = express.Router();
// import { Router } from 'express';
// const router = Router()

// const VehicleController = import("../controllers/vehicle.controller");

// const vehicleController = new VehicleController();

// router.get("/general", (req, res) => {
//     return res.send("You have called a general route");
// });

// router.get("/general/vehicle", vehicleController.getVehicleData);

import EnrollmentController from '../controllers/enrollment.controller.js';
// const EnrollmentController = import("../controllers/enrollment.controller.js");
const enrollmentController = new EnrollmentController();


router.get("/general/enrollment/:enrollmentId",enrollmentController.retrieveEnrollment);
router.get("/general/enrollments",enrollmentController.retrieveEnrollments);
router.put("/general/enrollment",enrollmentController.createEnrollment);
router.post("/general/enrollment/:enrollmentId",enrollmentController.updateEnrollment);
router.delete("/general/enrollment/:enrollmentId",enrollmentController.deleteEnrollment);



router.get("/general/class",enrollmentController.studentInSubject);



// router.get("/general/tutor",enrollmentController.studentInfo);


export default router;




// const express = require('express');
// const router = express.Router();


// const EnrollmentController = require("../controllers/enrllment.controller");
// const userController = new EnrollmentController();

// router.get("/general/class",userController.registerUser);

// router.get("/general/tutor",userController.loginUser);

// module.exports = router;