import express from "express";
import "dotenv/config.js";
import usersRouter from "./routes/usersRouter.js?";

const app = express();
app.use("/users", usersRouter);
const port = "5000";
app.listen(port, () => console.log(`Server is listening at port ${port}.`));
