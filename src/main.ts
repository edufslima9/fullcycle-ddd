import Address from './entity/address';
import Customer from './entity/customer';
import Order from './entity/order';
import OrderItem from './entity/order-item';
import Product from './entity/product';

const customer = new Customer('123', 'Eduardo Felipe');
const address = new Address('Rua um', 2, '12345-678', 'Recife', 'Brazil');
customer.address = address;
customer.activate();

const product1 = new Product("1", "Item 1", 10);
const product2 = new Product("2", "Item 2", 15);
const item1 = new OrderItem("1", product1.id, product1.name, product1.price, 2);
const item2 = new OrderItem("2", product2.id, product2.name, product2.price, 3);
const order = new Order("1", "123", [item1, item2]);

console.log(customer)
console.log(order)
