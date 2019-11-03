import React from 'react';
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { Link } from '@reach/router';
import { GetUsers } from '../service';

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

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

class Blogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
    };
  }

  async componentDidMount() {
    await sleep(2000);
    GetUsers().then(response => {
      this.setState({ users: response, loading: false });
    });
  }

  render() {
    const { users, loading } = this.state;
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
              {loading ? (
                <TableRow hover role="listitem" tabIndex={-1}>
                  <TableCell>
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                users.map(row => {
                  return (
                    <TableRow hover role="listitem" tabIndex={-1} key={row.id}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return RenderTableCell(row.id, column.id, value);
                      })}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default Blogger;
