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

  render() {
    const { onOpCountChange } = this.props;
    const onOp1Change = event => {
      const { value } = event.target;
      this.setState(
        () => {
          const { operationCount } = this.state;
          return {
            op1: parseInt(value),
            operationCount: operationCount + 1,
          };
        },
        () => {
          const { operationCount } = this.state;
          onOpCountChange(operationCount);
        }
      );
    };
    const onOp2Change = event => {
      const { value } = event.target;
      this.setState(
        () => {
          const { operationCount } = this.state;
          return {
            op2: parseInt(value),
            operationCount: operationCount + 1,
          };
        },
        () => {
          const { operationCount } = this.state;
          onOpCountChange(operationCount);
        }
      );
    };
    const { op1, op2 } = this.state;
    return (
      <div>
        <input type="number" placeholder="operand 1" onChange={onOp1Change} />
        <input type="number" placeholder="operand 2" onChange={onOp2Change} />
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
