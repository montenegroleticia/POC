import { Router } from "express";
import * as workoutController from "../Controllers/workout-controller";

const workoutRouter = Router();

workoutRouter.post("/workouts", workoutController.createWorkout);
workoutRouter.get("/workouts", workoutController.getWorkout);
workoutRouter.put("/workouts/:id", workoutController.putWorkout);
workoutRouter.delete("/workouts/:id", workoutController.deleteWorkout);

export default workoutRouter;
