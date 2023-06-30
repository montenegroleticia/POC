import { Router } from "express";
import * as workoutController from "../Controllers/workout-controller";

const workoutRouter = Router();

workoutRouter.post("/workout", workoutController.createWorkout);
workoutRouter.get("/workout", workoutController.getWorkout);
workoutRouter.put("/workout:id", workoutController.putWorkout);
workoutRouter.delete("/workout:id", workoutController.deleteWorkout);

export default workoutRouter;
