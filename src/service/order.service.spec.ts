import Customer from '../entity/customer';
import Order from '../entity/order';
import OrderItem from '../entity/order-item';
import OrderService from './order.service';

describe('Order service unit tests', () => {
  it('should place an order', () => {
    const customer = new Customer('c1', 'John Doe');
    const orderItem = new OrderItem('i1', 'p1', 'Produto 1', 10, 2);

    const order = OrderService.placeOrder(customer, [orderItem]);

    expect(customer.rewardPoints).toBe(10);
    expect(order.total()).toBe(20);
  });

  it('should get total of all orders', () => {
    const item1 = new OrderItem('i1', 'p1', 'Item 1', 100, 2);
    const item2 = new OrderItem('i2', 'p2', 'Item 2', 25, 3);

    const order1 = new Order('o1', 'c1', [item1]);
    const order2 = new Order('o2', 'c1', [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(275);
  });
});
