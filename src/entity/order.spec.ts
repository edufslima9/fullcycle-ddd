import Order from './order';
import OrderItem from './order-item';
import Product from './product';

describe('Order unit tests', () => {
  const product1 = new Product('1', 'Item 1', 10);
  const product2 = new Product('2', 'Item 2', 15);
  const item1 = new OrderItem('1', product1.id, product1.name, product1.price, 2);
  const item2 = new OrderItem('2', product2.id, product2.name, product2.price, 3);

  it('should throw error when id is empty', () => {
    expect(() => {
      const order = new Order('', '11', [item1, item2]);
    }).toThrow('Id is required');
  });

  it('should throw error when customerId is empty', () => {
    expect(() => {
      const order = new Order('123', '', [item1, item2]);
    }).toThrow('CustomerId is required');
  });

  it('should throw error when items is empty', () => {
    expect(() => {
      const order = new Order('123', '11', []);
    }).toThrow('Items is required');
  });

  it('should calculate total', () => {
    const order = new Order('123', '11', [item1, item2]);

    const total = order.total();

    expect(total).toBe(65);
  });
});
