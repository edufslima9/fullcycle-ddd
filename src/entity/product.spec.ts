import Product from './product';

describe('Product unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      const product = new Product('', 'Item 1', 10);
    }).toThrow('Id is required');
  });

  it('should throw error when name is empty', () => {
    expect(() => {
      const product = new Product('1', '', 10);
    }).toThrow('Name is required');
  });

  it('should throw error when price is zero', () => {
    expect(() => {
      const product = new Product('1', 'Item 1', 0);
    }).toThrow('Price must be greater than zero');
  });

  it('should change name', () => {
    const product = new Product('1', 'Item 1', 150);
    product.changeName('Product 2');
    expect(product.name).toBe('Product 2');
  });

  it('should change price', () => {
    const product = new Product('1', 'Item 1', 250);
    product.changePrice(15);
    expect(product.price).toBe(15);
  });
});
