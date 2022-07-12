import express, { json } from "express";
import protectedRoutes from "./protected.routes.js";
import generalRoutes from "./general.routes.js";

const app = express();

app.use(json()); // Enable express to parse JSON as request body.
app.use(protectedRoutes);
app.use(generalRoutes);

export default app;