import { email, mobile, required } from 'utils/validators';

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

export const initialCustomer = {
  firstName: 'jalal',
  lastName: 'hoss',
  mobile: '3892',
  email: 'kir@kir.coo',
};

export const validation = {
  firstName: [required('First Name')],
  lastName: [required('Last Name')],
  mobile: [mobile],
  email: [email],
};

export const tabs = {
  home: {
    text: 'Customer',
    to: '/app/customers',

  },
  new: {
    text: 'New Customer',
    to: '/app/customers/new',
  },
};
