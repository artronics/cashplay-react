import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import MessageBox from 'components/MessageBox';
import Table from 'components/Table';
import { columns } from './customer';

const refresh = () => (console.log('refresh pressed'));
const delete_ = () => (console.log('delete pressed'));
const edit = () => (console.log('edit pressed'));
const view = () => (console.log('view pressed'));
const renderTable = (customers) => (
  <Table
    data={customers}
    columns={columns}
    refresh={refresh}
    delete_={delete_}
    view={view}
    edit={edit}
    onRowSelection={() => {}}
  />
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

