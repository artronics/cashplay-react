import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import MessageBox from 'components/MessageBox';
import Table from 'components/Table';
import { columns } from './customer';

const renderTable = (customers) => (
  <Table data={customers} columns={columns} onRowSelection={()=>{}}/>
);

const showCustomers = (customers) => !customers || customers.length === 0
  ? (<MessageBox icon={'info'}>Oops! No customer has been registered.</MessageBox>)
  : (renderTable(customers));


const c = [{id: 1, firstName: 'john', lastName: 'doe'}, {id: 2, firstName: 'john', lastName: 'doe'}];
function RecentlyAddedCustomers(props) {
  const {data} = props;
  return (
    <Card title={'Recently Added Customers'}>
      {showCustomers(data)}
    </Card>
  );
}

RecentlyAddedCustomers.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RecentlyAddedCustomers;

