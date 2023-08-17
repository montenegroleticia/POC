import { CreateWorkout, Workout } from "Protocols";
import prisma from "../Database";

export async function createWorkout(workout: CreateWorkout) {
  return await prisma.workouts.create({
    data: {
      type: workout.type,
      name: workout.name,
      description: workout.description,
    },
  });
}

export async function getWorkout() {
  return await prisma.workouts.findMany();
}

export async function getWorkoutById(id: number) {
  return await prisma.workouts.findFirst({ where: { id } });
}

export async function putWorkout(workout: Workout) {
  return await prisma.workouts.update({
    data: {
      type: workout.type,
      name: workout.name,
      description: workout.description,
    },
    where: { id: workout.id },
  });
}

export async function deleteWorkout(id: number) {
  return await prisma.workouts.delete({ where: { id } });
}
