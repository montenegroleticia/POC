import { Request, Response } from "express";
import * as workoutService from "../Services/workout-service";
import { Workout } from "Protocols";
import httpStatus from "http-status";

export function createWorkout(req: Request, res: Response) {
  const workout = req.body as Workout;
  workoutService.createWorkout(workout);

  res.sendStatus(httpStatus.CREATED);
}

export function getWorkout(req: Request, res: Response) {
  const workout = workoutService.getWorkout();

  res.send(workout).status(httpStatus.OK);
}

export function putWorkout(req: Request, res: Response) {
  workoutService.putWorkout();

  res.sendStatus(httpStatus.OK);
}

export function deleteWorkout(req: Request, res: Response) {
  workoutService.deleteWorkout();

  res.sendStatus(httpStatus.NO_CONTENT);
}
