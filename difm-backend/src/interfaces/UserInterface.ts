import { z } from 'zod'; 

const UserSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
  lastName: z.string({
    required_error: 'lastName is required',
    invalid_type_error: 'lastName must be a string',
  }).min(3, { message: 'lastName must be 3 or more characters long' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).min(1900, { message: 'Year cannot be less than 1900' })
    .max(2022, { message: 'Year cannot be bigger than 2022' }),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean({
    invalid_type_error: 'Status must be a string',
  }).optional(),
  buyValue: z.number({
    required_error: 'buyValue is required',
    invalid_type_error: 'buyValue must be a number',
  }).int({ message: 'ButValue must be integer' }),
});

export type Vehicle = z.infer<typeof UserSchema>;
export { UserSchema };
