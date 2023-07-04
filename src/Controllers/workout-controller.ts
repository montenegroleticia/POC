import { Request, Response } from "express";
import * as workoutService from "../Services/workout-service";
import { CreateWorkout, Workout } from "Protocols";
import httpStatus from "http-status";

export async function createWorkout(req: Request, res: Response) {
  const workout = req.body as CreateWorkout;
  try {
    await workoutService.createWorkout(workout);

    res.status(httpStatus.CREATED).send("Workout created");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getWorkout(req: Request, res: Response) {
  try {
    const workout = (await workoutService.getWorkout()) as Workout[];

    res.status(httpStatus.OK).send(workout);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getWorkoutById(req: Request, res: Response) {
  const id: number = parseInt(req.params.id, 10);

  try {
    const workout = (await workoutService.getWorkoutById(id)) as Workout[];

    res.status(httpStatus.OK).send(workout);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function putWorkout(req: Request, res: Response) {
  const workoutId: number = parseInt(req.params.id, 10);
  const updatedWorkout = req.body as Workout;

  try {
    await workoutService.putWorkout(workoutId, updatedWorkout);

    res.status(httpStatus.OK).send("Updated workout");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function deleteWorkout(req: Request, res: Response) {
  const workoutId: number = parseInt(req.params.id, 10);

  try {
    await workoutService.deleteWorkout(workoutId);

    res.status(httpStatus.NO_CONTENT).send("Deleted workout");
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
