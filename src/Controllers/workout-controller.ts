import { Request, Response } from "express";
import * as workoutService from "../Services/workout-service";
import { CreateWorkout, Workout } from "Protocols";
import httpStatus from "http-status";

export async function createWorkout(req: Request, res: Response) {
  const workout = req.body as CreateWorkout;

  await workoutService.createWorkout(workout);

  res.status(httpStatus.CREATED).send("Workout created");
}

export async function getWorkout(req: Request, res: Response) {
  const workout = (await workoutService.getWorkout()) as Workout[];

  res.status(httpStatus.OK).send(workout);
}

export async function putWorkout(req: Request, res: Response) {
  const workoutId: number = parseInt(req.params.id, 10);
  const updatedWorkout = req.body as Workout;

  await workoutService.putWorkout(workoutId, updatedWorkout);

  res.status(httpStatus.OK).send("Updated workout");
}

export async function deleteWorkout(req: Request, res: Response) {
  const workoutId: number = parseInt(req.params.id, 10);

  await workoutService.deleteWorkout(workoutId);

  res.status(httpStatus.NO_CONTENT).send("Deleted workout");
}
