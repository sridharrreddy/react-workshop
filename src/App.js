import React from 'react';
import './App.css';
import LocaleGreet from './components/LocaleGreet';
import Add from './components/Add';

class App extends React.Component {
  state = {
    opCount: 0,
  };
  render() {
    return (
      <React.Fragment>
        <LocaleGreet lang={this.props.lang} name={this.props.name} />
        <Add onOpCountChange={res => this.setState({ opCount: res })} />
        <span>Op Count: {this.state.opCount}</span>
      </React.Fragment>
    );
  }
}

export default App;
