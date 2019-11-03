import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { Link } from '@reach/router';
import GetUsers from '../service';

function RenderTableCell(userId, columnId, value) {
  switch (columnId) {
    case 'posts':
      return (
        <TableCell key={columnId}>
          <Link to={`/user/${userId}/posts`}>Posts</Link>
        </TableCell>
      );
    default:
      return <TableCell key={columnId}>{value}</TableCell>;
  }
}
class Blogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    GetUsers().then(response => {
      this.setState({ users: response });
    });
  }

  render() {
    const { users } = this.state;
    const columns = [
      { id: 'name', label: 'Name', minWidth: 270 },
      { id: 'posts', label: 'Posts', minWidth: 170 },
    ];

    return (
      <Paper>
        <div>
          <Table stickyHeader aria-label="user list" title="user list">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(row => {
                return (
                  <TableRow hover role="listitem" tabIndex={-1} key={row.id}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return RenderTableCell(row.id, column.id, value);
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default Blogger;
