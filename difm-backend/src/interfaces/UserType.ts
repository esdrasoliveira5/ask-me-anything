import { z } from 'zod'; 
import { AddressSchema } from './AddressType';

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
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }).email({ message: 'email invalid' }),
  contact: z.string({
    required_error: 'contact is required',
    invalid_type_error: 'contact must be a string',
  }).length(11, { message: 'contact must be 11 characters long' }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }),
  type: z.literal('jobber')
    .or(z.literal('customer')),
  address: AddressSchema,
});

export type User = z.infer<typeof UserSchema>;
export { UserSchema };
