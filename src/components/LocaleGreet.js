import React from 'react';
import { string } from 'prop-types';

function greet(language, name) {
  switch (language) {
    case 'es':
      return `Hola ${name}!`;
    case 'gb':
      return `Halo ${name}`;
    case 'en':
    default:
      return `Hello ${name}`;
  }
}

function LocaleGreet({ name, lang }) {
  return <div className="App">{greet(lang, name)}</div>;
}

LocaleGreet.propTypes = {
  name: string.isRequired,
  lang: string.isRequired,
};

export default LocaleGreet;
