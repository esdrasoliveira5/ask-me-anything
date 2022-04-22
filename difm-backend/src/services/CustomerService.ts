import Service from '.';
import { Customer } from '../types/CustomerType';
import {
  ResponseCreate,
  ResponseError,
  ResponseRead,
  ResponseReadOne,
} from '../interfaces/ResponsesInterface';
import CustomerModel from '../models/CustomerModel';

class CustomerService extends Service<Customer> {
  constructor(model = new CustomerModel()) {
    super(model);
  }

  create = async (obj:Customer):
  Promise<ResponseCreate<Customer> | ResponseError> => {
    const validation = this.validation.customerValidations(obj);
    if (validation) return validation;
    
    const customer = await this.model.readOne(obj);
    if (customer) {
      return {
        status: this.status.CONFLICT, response: { error: this.errors.CONFLICT },
      };
    }

    const hash = await this.bcrypt.hashIt(obj.password);
    const response = await this.model.create({ ...obj, password: hash });
    if (response === undefined) {
      return {
        status: this.status.INTERNAL,
        response: { error: this.errors.INTERNAL },
      };
    }
    return { status: this.status.CREATED, response };
  };

  read = async (): Promise<ResponseRead<Customer> | ResponseError> => {
    const response = await this.model.read();
    if (response === undefined) {
      return {
        status: this.status.INTERNAL,
        response: { error: this.errors.INTERNAL },
      };
    }
    return { status: this.status.OK, response };
  };

  readOne = async (id: string):
  Promise<ResponseError | ResponseReadOne<Customer>> => {
    const response = await this.model.readOne({ _id: id });
    if (response === null) {
      return {
        status: this.status.NOT_FOUND,
        response: { error: this.errors.NOT_FOUND },
      };
    }
    return { status: this.status.OK, response };
  };
}

export default CustomerService;