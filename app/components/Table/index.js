import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import MdTable, { TableBody, TableCell, TableHead, TableRow, } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

class Table extends React.Component {
  state = {
    selected: -1,
  };
  handleClick = (event, id) => {
    this.setState({selected: id});
    this.props.onRowSelection(this.props.data.filter((d) => d.id === id)[0]);
  };

  isSelected = (id) => this.state.selected === id;

  headers = () =>
    (<TableRow>
      <TableCell></TableCell>
      {this.props.columns.map((c) => <TableCell key={c.id}>{c.text}</TableCell>)}
    </TableRow>);

  rowCells = (columns, row) => columns.map((c) => this.cellValue(c, row));

  cellValue = (column, row) =>
    (<TableCell className={column.extraClasses} key={column.id}>
      {column.cellValue
        ? column.cellValue(row)
        : row[column.id]}
    </TableCell>);

  render() {
    return (
      <Paper>
        {this.props.toolbar}
        <MdTable>
          <TableHead>
            {this.headers()}
          </TableHead>
          <TableBody>
            {this.props.data.map((row) => {
              const isSelected = this.isSelected(row.id);
              console.log(isSelected);
              return (<TableRow
                hover
                onClick={(event) => this.handleClick(event, row.id)}
                selected={isSelected}
                key={row.id}
              >
                <TableCell checkbox>
                  <Checkbox checked={isSelected}/>
                </TableCell>
                {this.rowCells(this.props.columns, row)}
              </TableRow>);
            })}
          </TableBody>
        </MdTable>
        {this.props.footer}
      </Paper>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cellValue: PropTypes.func,
    extraClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  })).isRequired,
  onRowSelection: PropTypes.func.isRequired,
  toolbar: PropTypes.element,
  footer: PropTypes.element,
};

export default Table;
