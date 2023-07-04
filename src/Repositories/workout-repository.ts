import { CreateWorkout, Workout } from "Protocols";
import connection from "../Database";

export async function createWorkout(workout: CreateWorkout) {
  return await connection.query<CreateWorkout>(
    `INSERT INTO workouts (type, name, description) VALUES ($1, $2, $3)`,
    [workout.type, workout.name, workout.description]
  );
}

export async function getWorkout() {
  const result = await connection.query(`SELECT * FROM workouts`);
  return result.rows;
}

export async function getWorkoutById(id: number) {
  const result = await connection.query(`SELECT * FROM workouts WHERE id=$1`, [
    id,
  ]);
  return result.rows;
}

export async function putWorkout(workout: Workout) {
  return await connection.query<Workout>(
    `UPDATE workouts SET type=$1, name=$2, description=$3 WHERE id = $4`,
    [workout.type, workout.name, workout.description, workout.id]
  );
}

export async function deleteWorkout(id: number) {
  return await connection.query(`DELETE FROM workouts WHERE id = $1`, [id]);
}
