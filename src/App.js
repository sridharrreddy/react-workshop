import React from 'react';
import './App.css';
import LocaleGreet from './components/LocaleGreet';
import Add from './components/Add';

function App({ lang, name }) {
  return (
    <React.Fragment>
      <LocaleGreet lang={lang} name={name} />
      <Add />
    </React.Fragment>
  );
}

export default App;
