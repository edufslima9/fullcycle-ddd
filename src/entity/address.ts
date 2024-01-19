export default class Address {
  private _street: string = '';
  private _number: number = 0;
  private _zip: string = '';
  private _city: string = '';
  private _country: string = '';

  constructor(street: string, number: number, zip: string, city: string, country: string) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;
    this._country = country;
    this.validate();
  }

  validate() {
    if (this._street.length === 0) throw new Error('Street is required');
    if (this._zip.length === 0) throw new Error('Zip Code is required');
    if (this._city.length === 0) throw new Error('City is required');
    if (this._country.length === 0) throw new Error('Country is required');
  }

  toString(): string {
    return `${this._street}, ${this._number}, ${this._city} - ${this._country} - ZIP Code: ${this._zip}`;
  }
}
