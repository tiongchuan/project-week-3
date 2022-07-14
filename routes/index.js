import express, { json } from "express";
import rootRoute from "./root.route.js";
import registerRoute from "./register.route.js";
import loginRoute from "./login.route.js";
import protectedRoutes from "./protected.routes.js";
import generalRoutes from "./general.routes.js";

const app = express();

app.use(json()); // Enable express to parse JSON as request body.
app.use(rootRoute);
app.use(registerRoute);
app.use(loginRoute);
app.use(generalRoutes);
app.use(protectedRoutes);

export default app;