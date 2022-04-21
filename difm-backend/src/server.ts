import App from './app';
import CustomRouter from './routes/routes';
import CustomerController from './controllers/CustomerController';
import { Customer } from './interfaces/CustomerType';

const server = new App();
const customerController = new CustomerController();
const customerRouter = new CustomRouter<Customer>();
customerRouter.addRoute(customerController);
server.addRouter(customerRouter.router);

export default server;