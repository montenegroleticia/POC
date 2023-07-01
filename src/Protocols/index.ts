export type Workout = {
    id: number;
    type: string;
    name: string;
    description: string;
}

export type CreateWorkout = Omit<Workout, "id">;
