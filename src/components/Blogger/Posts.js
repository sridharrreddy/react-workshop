import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <span>Posts {this.props.userId}</span>;
  }
}

export default Posts;
