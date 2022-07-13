import express, { json } from "express";
import protectedRoutes from "./protected.routes.js";
import generalRoutes from "./general.routes.js";

const app = express();

app.use(json()); // Enable express to parse JSON as request body.
app.use(generalRoutes);
app.use(protectedRoutes);

export default app;