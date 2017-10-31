export const columns = [
  {
    id: 'id',
    text: 'ID',
  },
  {
    id: 'name',
    text: 'Name',
    cellValue: (customer) => `${customer.firstName} ${customer.lastName}`,
    extraClasses: 'art-capitalize',
  },
];

export class Customer {
  constructor(firsName = '', lastName = '') {
    this.firstName = firsName;
    this.lastName = lastName;
  }
}

export const tabs = {
  home: {
    text: 'Customer',
    to: '/app/customers',

  },
  new: {
    text: 'New Customer',
    to: '/app/customers/new',
    data: new Customer(),
  },
};
