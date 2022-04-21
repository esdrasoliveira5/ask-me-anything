import { Schema, model as createModel, Document } from 'mongoose';
import { Customer } from '../types/CustomerType';
import MongoModel from './MongoModel';

interface CustomerDocument extends Customer, Document {}

const customerSchema = new Schema<CustomerDocument>(
  {
    name: String,
    lastName: String,
    email: String,
    contact: String,
    password: String,
    type: String,
    hires: Array,
    address: Object,
  },
  { versionKey: false },
);

class CustomerModel extends MongoModel<Customer> {
  constructor(model = createModel('customer', customerSchema)) {
    super(model);
  }
}

export default CustomerModel;
