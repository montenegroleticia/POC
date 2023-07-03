import { CreateWorkout } from "Protocols";
import Joi from "joi";

export const workoutSchema = Joi.object<CreateWorkout>({
  type: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
});
