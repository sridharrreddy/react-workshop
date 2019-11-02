import React from 'react';

class Add extends React.Component {
  state = {
    op1: 0,
    op2: 0,
    operationCount: 0,
  };

  render() {
    const onOp1Change = event => {
      this.setState(
        {
          op1: parseInt(event.target.value),
          operationCount: this.state.operationCount + 1,
        },
        () => {
          this.props.onOpCountChange(this.state.operationCount);
        }
      );
    };
    const onOp2Change = event => {
      this.setState(
        {
          op2: parseInt(event.target.value),
          operationCount: this.state.operationCount + 1,
        },
        () => {
          this.props.onOpCountChange(this.state.operationCount);
        }
      );
    };
    return (
      <div>
        <input type="number" placeholder="operand 1" onChange={onOp1Change} />
        <input type="number" placeholder="operand 2" onChange={onOp2Change} />
        <div>
          <span>Result: {this.state.op1 + this.state.op2}</span>
        </div>
      </div>
    );
  }
}
export default Add;
