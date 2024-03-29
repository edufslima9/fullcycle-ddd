import Address from './address';

/*
Complexidade de negócio
Domain
- Entity
  -- customer.ts (regras de negócio)

Complexidade acidental
Infra
- Entity / Model
  -- customer.ts (get, set)
*/
export default class Customer {
  private _id: string;
  private _name: string = '';
  private _address!: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  /*constructor(id: string, name: string, address: string, active: boolean) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._active = active
  }*/

  // Uma entidade deve ser sempre consistente
  // Uma entidade deve se auto validar
  validate() {
    if (this._name.length === 0) throw new Error('Name is required');
    if (this._id.length === 0) throw new Error('Id is required');
  }

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    if (this._address === undefined) throw new Error('Address is mandatory to activate a customer');
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set address(address: Address) {
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  isActive(): boolean {
    return this._active;
  }

  /*get id(): string {
    return this._id;
  }

  get address(): string {
    return this._address;
  }


  private set id(id: string) {
    this._id = id;
  }



  private set address(address: string) {
    this._address = address;
  }

  private set active(active: boolean) {
    this._active = active;
  }*/
}
