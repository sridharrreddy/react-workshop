import React from 'react';
import { func } from 'prop-types';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      op1: 0,
      op2: 0,
      operationCount: 0,
    };
  }

  onOpChange = event => {
    const { onOpCountChange } = this.props;
    const { value, name } = event.target;
    const opValue = parseInt(value);
    this.setState(
      prevState => {
        const { operationCount, op1, op2 } = prevState;
        return {
          op1: name === 'op1' ? opValue : op1,
          op2: name === 'op2' ? opValue : op2,
          operationCount: operationCount + 1,
        };
      },
      () => {
        const { operationCount } = this.state;
        onOpCountChange(operationCount);
      }
    );
  };

  render() {
    const { op1, op2 } = this.state;
    return (
      <div>
        <input
          type="number"
          name="op1"
          placeholder="operand 1"
          onChange={this.onOpChange}
        />
        <input
          type="number"
          name="op2"
          placeholder="operand 2"
          onChange={this.onOpChange}
        />
        <div>
          <span>{`Result: ${op1 + op2}`}</span>
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  onOpCountChange: func.isRequired,
};
export default Add;
