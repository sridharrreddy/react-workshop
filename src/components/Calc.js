import React from 'react';
import { Box, Button, Grid, TextField, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    marginLeft: '10px',
  },
})(Button);

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      op1: 0,
      op2: 0,
      result: 0,
    };
  }

  onOpChange = event => {
    const { value, name } = event.target;
    const opValue = value === '' ? 0 : parseInt(value);
    this.setState(prevState => {
      const { op1, op2 } = prevState;
      return {
        op1: name === 'op1' ? opValue : op1,
        op2: name === 'op2' ? opValue : op2,
      };
    });
  };

  onOp = operation => {
    const { op1, op2 } = this.state;
    let result = 0;
    switch (operation) {
      case 'Multiply':
        result = op1 * op2;
        break;
      case 'Divide':
        result = op1 / op2;
        break;
      case 'Add':
      default:
        result = op1 + op2;
        break;
    }
    this.setState({ result });
  };

  render() {
    const { op1, op2, result } = this.state;
    return (
      <Container>
        <Grid container justify="center">
          <TextField
            label="Operand 1"
            margin="normal"
            variant="outlined"
            name="op1"
            placeholder="operand 1"
            value={op1}
            type="number"
            onChange={this.onOpChange}
          />
          <Box ml={5}>
            <TextField
              type="number"
              name="op2"
              placeholder="operand 2"
              value={op2}
              label="Operand 2"
              margin="normal"
              variant="outlined"
              onChange={this.onOpChange}
            />
          </Box>
        </Grid>
        <Grid container justify="center">
          <Box mt={3}>
            <StyledButton
              variant="outlined"
              color="primary"
              onClick={() => this.onOp('Add')}
            >
              Add
            </StyledButton>
            <StyledButton
              variant="outlined"
              color="primary"
              onClick={() => this.onOp('Multiply')}
            >
              Multiply
            </StyledButton>
            <StyledButton
              variant="outlined"
              color="primary"
              onClick={() => this.onOp('Divide')}
            >
              Divide
            </StyledButton>
          </Box>
        </Grid>
        <Grid container justify="center">
          <Box mt={3}>
            <TextField
              disabled
              id="outlined-disabled"
              label="Result"
              value={result}
              margin="normal"
              variant="outlined"
            />
          </Box>
        </Grid>
      </Container>
    );
  }
}

export default Calc;
