import React, { Component } from 'react';
import { string } from 'prop-types';
import {
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { GetUserPosts, DeleteUserPost } from '../../service';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
      page: 0,
      rowsPerPage: 10,
      totalCount: 0,
    };
  }

  async componentDidMount() {
    this.onChangePage(null, 0);
  }

  onChangePage = async (event, page) => {
    const { userId } = this.props;
    this.setState({ loading: true, page });
    const response = await GetUserPosts(userId, page, 10);
    this.setState({
      posts: response.data,
      totalCount: response.total,
      loading: false,
    });
  };

  onDeletePost = async postId => {
    await DeleteUserPost(postId);
    this.onChangePage(null, 0);
  };

  render() {
    const { posts, loading, page, rowsPerPage, totalCount } = this.state;
    const columns = [
      { id: 'title', label: 'Title', minWidth: 270 },
      { id: 'delete', label: '', minWidth: 30 },
    ];

    return (
      <Paper>
        <div>
          <Table stickyHeader aria-label="user list">
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
                posts.map(row => {
                  const { id, title } = row;
                  return (
                    <TableRow hover role="listitem" tabIndex={-1} key={row.id}>
                      <TableCell key={id}>{title}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          onClick={() => this.onDeletePost(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
            {loading ? (
              undefined
            ) : (
              <TableFooter>
                <TableRow>
                  <TablePagination
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onChangePage={this.onChangePage}
                    count={totalCount}
                  />
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </div>
      </Paper>
    );
  }
}

Posts.propTypes = {
  userId: string.isRequired,
};

export default Posts;
