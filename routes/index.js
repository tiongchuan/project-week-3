

// const express = import("express");

import express from 'express';
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.
// const protectedRoutes = import("./protected.routes.js");
// const generalRoutes = import("./general.routes.js");
// const enrollmentRoutes = import("./enrollment.routes.js")

import generalRoutes from "./general.routes.js"

// app.use(protectedRoutes);
app.use(generalRoutes);
// app.use(enrollmentRoutes);

// module.exports = app;
export default app





// const express = require("express");
// const app = express();
// app.use(express.json()); // Enable express to parse JSON as request body.
// const protectedRoutes = require("./protected.routes");
// const generalRoutes = require("./general.routes");

// app.use(protectedRoutes);
// app.use(generalRoutes);

// module.exports = app;