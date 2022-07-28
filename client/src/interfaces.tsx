export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

// Type annotation -> set the user type that comes to the API
export interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
}
