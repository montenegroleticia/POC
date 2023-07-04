import { Router } from "express";
import * as workoutController from "../Controllers/workout-controller";
import { validateSchemaMiddleware } from "../Middlewares/validate-middleware";
import { workoutSchema } from "../Schemas";

const workoutRouter = Router();

workoutRouter.post(
  "/workouts",
  validateSchemaMiddleware(workoutSchema),
  workoutController.createWorkout
);
workoutRouter.get("/workouts", workoutController.getWorkout);
workoutRouter.get("/workouts/:id", workoutController.getWorkoutById);
workoutRouter.put(
  "/workouts/:id",
  validateSchemaMiddleware(workoutSchema),
  workoutController.putWorkout
);
workoutRouter.delete("/workouts/:id", workoutController.deleteWorkout);

export default workoutRouter;
