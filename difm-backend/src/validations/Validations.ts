import { MessageErrors, StatusCodes } from '../enums';
import { ResponseError } from '../interfaces/ResponsesInterface';
import { Customer, CustomerSchema } from '../types/CustomerType';
import { UserSchema } from '../types/UserType';
import { WorkerSchema } from '../types/WorkerType';

class Validations {
  public error = MessageErrors;

  public status = StatusCodes;

  userValidations = (obj: Customer | Worker): void | ResponseError => {
    const parsedUser = UserSchema.safeParse(obj);
    if (!parsedUser.success) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: parsedUser.error },
      };
    }
  };

  customerValidations = (obj: Customer): void | ResponseError => {
    const userError = this.userValidations(obj);
    if (userError) return userError;

    const parsedCustomer = CustomerSchema.safeParse(obj);
    if (!parsedCustomer.success) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: parsedCustomer.error },
      };
    }
  };

  motorcycleValidations = (obj: Worker): void | ResponseError => {
    const userError = this.userValidations(obj);
    if (userError) return userError;

    const parsedWorker = WorkerSchema.safeParse(obj);
    if (!parsedWorker.success) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: parsedWorker.error },
      };
    }
  };

  idValidations = (id: string): void | ResponseError => {
    if (id.length < 24) {
      return {
        status: this.status.BAD_REQUEST,
        response: { error: 'Id must have 24 hexadecimal characters' },
      };
    }
  };
}
export default Validations;
