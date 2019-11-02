import React from 'react';
import './App.css';
import { string } from 'prop-types';
import LocaleGreet from './components/LocaleGreet';
import Add from './components/Add';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opCount: 0,
    };
  }

  render() {
    const { lang, name } = this.props;
    const { opCount } = this.state;
    return (
      <>
        <LocaleGreet lang={lang} name={name} />
        <Add onOpCountChange={res => this.setState({ opCount: res })} />
        <span>{`Op Count: ${opCount}`}</span>
      </>
    );
  }
}

App.propTypes = {
  name: string.isRequired,
  lang: string.isRequired,
};

export default App;
