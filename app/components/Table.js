import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import MdTable, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Toolbar from 'components/Toolbar';

class Table extends React.Component {
  state = {
    selected: -1,
  };
  handleClick = (event, id) => {
    if (id === this.state.selected) {
      this.setState({selected: -1});
    } else {
      this.setState({selected: id});
    }
    // TODO fix this shit. why not data[id]? and if consider deselect
    this.props.onRowSelection(this.props.data.filter((d) => d.id === id)[0]);
  };

  isSelected = (id) => this.state.selected === id;

  headers = () =>
    (<TableRow>
      <TableCell padding={'checkbox'}></TableCell>
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
    const {selected} = this.state;
    return (
      <Paper>
        <Toolbar selected={selected} {...this.props}/>
        <MdTable>
          <TableHead>
            {this.headers()}
          </TableHead>
          <TableBody>
            {this.props.data.map((row) => {
              const isSelected = this.isSelected(row.id);
              return (<TableRow
                hover
                onClick={(event) => this.handleClick(event, row.id)}
                selected={isSelected}
                key={row.id}
              >
                <TableCell padding={'checkbox'}>
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
  footer: PropTypes.element,
};

export default Table;
