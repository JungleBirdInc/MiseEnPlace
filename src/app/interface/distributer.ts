  // * Distributors Table
  //   * name: Business name of the distributor
  //   * address: street address of the distributor
  //   * state: 2 letter state abbreviation
  //   * zip: 5 digit American postal code

export interface IDistributer{
  id: number,
  name: string,
  address: string,
  city: string,
  state: string,
  zip: number,
  phone: string,
  email: string,
  createdAt: Date,
  updatedAt: Date,
}