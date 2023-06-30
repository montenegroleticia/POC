import { Workout } from "Protocols";
import * as workoutRepository from "../Repositories/workout-repository";

export function createWorkout(workout: Workout) {
  return workoutRepository.createWorkout(workout);
}

export function getWorkout() {
  return workoutRepository.getWorkout();
}

export function putWorkout() {
  return workoutRepository.putWorkout();
}

export function deleteWorkout() {
  return workoutRepository.deleteWorkout();
}
