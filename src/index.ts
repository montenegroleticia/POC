import workoutRouter from "./Routers/workout-router";
import express, { Request, Response, json } from "express";
import httpStatus from "http-status";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(httpStatus.OK);
});

app.use(workoutRouter);

const port: number = parseInt(process.env.PORT ?? "5000", 10);
app.listen(port, () => {
  console.log(`Serve is up and running on port ${port}`);
});
