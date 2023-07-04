import { CreateWorkout, Workout } from "Protocols";
import * as workoutRepository from "../Repositories/workout-repository";

export async function createWorkout(workout: CreateWorkout) {
  return await workoutRepository.createWorkout(workout);
}

export async function getWorkout() {
  return await workoutRepository.getWorkout();
}

export async function getWorkoutById(id: number) {
  return await workoutRepository.getWorkoutById(id);
}

export async function putWorkout(workoutId: number, updatedWorkout: Workout) {
  updatedWorkout.id = workoutId;
  return await workoutRepository.putWorkout(updatedWorkout);
}

export async function deleteWorkout(id: number) {
  return await workoutRepository.deleteWorkout(id);
}
