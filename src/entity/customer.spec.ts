import Address from './address';
import Customer from './customer';

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      const customer = new Customer('', 'John');
    }).toThrow('Id is required');
  });

  it('should throw error when id is empty', () => {
    expect(() => {
      const customer = new Customer('123', '');
    }).toThrow('Name is required');
  });

  it('should change name', () => {
    // Arrange
    const customer = new Customer('123', 'John');

    //Act
    customer.changeName('Jane');

    //Assert
    expect(customer.name).toBe('Jane');
  });

  it('should activate customer', () => {
    // Arrange
    const customer = new Customer('1', 'Customer 1');
    const address = new Address('Street 1', 2, '12345-678', 'Rio de Janeiro', 'Brazil');
    customer.address = address;

    //Act
    customer.activate();

    //Assert
    expect(customer.isActive()).toBe(true);
  });

  it('should throw erro when customer addres is undefined when activate a customer', () => {
    expect(() => {
      const customer = new Customer('1', 'Customer 1');

      customer.activate();
    }).toThrow('Address is mandatory to activate a customer');
  });

  it('should deactivate customer', () => {
    // Arrange
    const customer = new Customer('1', 'Customer 1');
    const address = new Address('Street 1', 2, '12345-678', 'Rio de Janeiro', 'Brazil');
    customer.address = address;
    customer.activate();

    //Act
    customer.deactivate();

    //Assert
    expect(customer.isActive()).toBe(false);
  });

  it('should add reward points', () => {
    const customer = new Customer('1', 'Customer 1');
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
