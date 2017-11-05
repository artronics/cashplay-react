import { required } from 'utils/validators';

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
  firstName: '',
  lastName: '',
};

export const validation = {
  firstName: [required('First Name')],
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
