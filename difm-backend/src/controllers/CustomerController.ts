import { Request, Response } from 'express';
import Controller from '.';
import { Customer } from '../types/CustomerType';
import { RequestWithBody } from '../interfaces/RequestWithBodyI';
import { Error } from '../interfaces/ResponsesInterface';
import CustomerService from '../services/CustomerService';

class CustomerController extends Controller<Customer> {
  private _route: string;

  constructor(
    service = new CustomerService(),
    route = '/customer',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Customer>,
    res: Response<Customer | Error>,
  ): Promise<typeof res> => {
    const { body } = req;
    
    const { status, response } = await this.service.create(body);

    return res.status(status).json(response);
  };

  read = async (
    _req: Request,
    res: Response<Customer[] | Error>,
  ): Promise<typeof res> => {
    const { status, response } = await this.service.read();

    return res.status(status).json(response);
  };
}

export default CustomerController;