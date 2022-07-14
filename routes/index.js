


import express from 'express';
const app = express();
app.use(express.json()); 

import generalRoutes from "./general.routes.js"
import protectedRoutes from "./protected.routes.js"


app.use(generalRoutes);
app.use(protectedRoutes);


export default app

