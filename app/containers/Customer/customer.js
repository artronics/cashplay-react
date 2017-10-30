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
