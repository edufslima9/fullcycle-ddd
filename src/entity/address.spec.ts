import Address from './address';

describe('Address unit tests', () => {
  it('should throw error when street is empty', () => {
    expect(() => {
      const address = new Address('', 2, '12345-678', 'Rio de Janeiro', 'Brazil');
    }).toThrow('Street is required');
  });

  it('should throw error when zip code is empty', () => {
    expect(() => {
      const address = new Address('Street 1', 2, '', 'Rio de Janeiro', 'Brazil');
    }).toThrow('Zip Code is required');
  });

  it('should throw error when city is empty', () => {
    expect(() => {
      const address = new Address('Street 1', 2, '12345-678', '', 'Brazil');
    }).toThrow('City is required');
  });

  it('should throw error when county is empty', () => {
    expect(() => {
      const address = new Address('Street 1', 2, '12345-678', 'Rio de Janeiro', '');
    }).toThrow('Country is required');
  });
});
