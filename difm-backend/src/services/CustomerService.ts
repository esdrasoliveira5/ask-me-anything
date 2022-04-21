import Service from '.';
import { Customer } from '../types/CustomerType';
import {
  ResponseCreate,
  ResponseError,
} from '../interfaces/ResponsesInterface';
import CustomerModel from '../models/CustomerModel';

class CustomerService extends Service<Customer> {
  constructor(model = new CustomerModel()) {
    super(model);
  }

  create = async (obj:Omit<Customer, 'hires'>):
  Promise<ResponseCreate<Customer> | ResponseError> => {
    const response = await this.model.create({ ...obj, hires: [] });
    if (response === undefined) {
      return {
        status: this.status.INTERNAL,
        response: { error: this.errors.INTERNAL },
      };
    }
    return { status: this.status.CREATED, response };
  };
}

export default CustomerService;