import OrderItem from './order-item';
import Product from './product';

describe('OrderItem unit tests', () => {
  const product = new Product('1', 'Item 1', 100);
  it('should throw error when id is empty', () => {
    expect(() => {
      const orderItem = new OrderItem('', product.id, product.name, product.price, 10);
    }).toThrow('Id is required');
  });

  it('should throw error when productId is empty', () => {
    expect(() => {
      const orderItem = new OrderItem('1', '', product.name, product.price, 10);
    }).toThrow('ProductId is required');
  });

  it('should throw error when name is empty', () => {
    expect(() => {
      const orderItem = new OrderItem('1', product.id, '', product.price, 10);
    }).toThrow('Name is required');
  });

  it('should throw error when price is zero', () => {
    expect(() => {
      const orderItem = new OrderItem('1', product.id, product.name, 0, 3);
    }).toThrow('Price must be greater than zero');
  });

  it('should throw error when quantity is zero', () => {
    expect(() => {
      const orderItem = new OrderItem('1', product.id, product.name, product.price, 0);
    }).toThrow('Quantity must be greater than zero');
  });

  it('should calculate total', () => {
    const orderItem = new OrderItem('1', product.id, product.name, product.price, 6);
    expect(orderItem.orderItemTotal()).toBe(600);
  });
});
