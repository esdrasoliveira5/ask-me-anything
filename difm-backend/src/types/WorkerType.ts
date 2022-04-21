import { z } from 'zod'; 
import { User, UserSchema } from './UserType';

const WorkerSchema = z.object({
  service: z.string({
    required_error: 'service is required',
    invalid_type_error: 'service must be a string',
  }).min(3, { message: 'lastName must be 3 or more characters long' }),
  categorys: z.array(z.string()),
  price: z.number({
    required_error: 'price is required',
    invalid_type_error: 'price must be a number',
  }).min(1, { message: 'price cannot be less than 1' })
    .or(z.literal('a combinar')),
  customers: z.array(UserSchema),
});

export type Worker = User & z.infer<typeof WorkerSchema>;
export { WorkerSchema };
