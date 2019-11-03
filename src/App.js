import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Router } from '@reach/router';
import './App.css';
import Blogger from './components/Blogger';
import Posts from './components/Blogger/Posts';

function App() {
  return (
    <Container>
      <Grid item xs={12}>
        <Router>
          <Blogger path="/" />
          <Posts path="/user/:userId/posts" userId="0" />
        </Router>
      </Grid>
    </Container>
  );
}
export default App;
