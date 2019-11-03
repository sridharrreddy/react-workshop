import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './App.css';
import Blogger from './components/Blogger';

function App() {
  return (
    <Container>
      <Grid item xs={12}>
        <Blogger />
      </Grid>
    </Container>
  );
}
export default App;
