import { z } from 'zod'; 
import { Address } from './AddressType';

const UserSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
  lastName: z.string({
    required_error: 'lastName is required',
    invalid_type_error: 'lastName must be a string',
  }).min(3, { message: 'lastName must be 3 or more characters long' }),
  email: z.string({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a string',
  }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }),
});

export type User = Address & z.infer<typeof UserSchema>;
export { UserSchema };
