import { z } from 'zod'; 
import { User } from './UserType';
import { WorkerSchema } from './WorkerType';

const CustomerSchema = z.object({
  hires: z.array(WorkerSchema).optional(),
});

export type Customer = User & z.infer<typeof CustomerSchema>;
export { CustomerSchema };
