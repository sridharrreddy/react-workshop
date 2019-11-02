import React from 'react';
import './App.css';
import LocaleGreet from './components/LocaleGreet';

function App({ lang, name }) {
  return <LocaleGreet lang={lang} name={name} />;
}

export default App;
