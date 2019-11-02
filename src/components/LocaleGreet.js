import React from 'react';

function greet(language, name) {
  switch (language) {
    case 'es':
      return 'Hola ' + name + '!';
    case 'gb':
      return 'Halo ' + name;
    case 'en':
    default:
      return 'Hello ' + name;
  }
}

function LocaleGreet({ name, lang }) {
  return <div className="App">{greet(lang, name)}</div>;
}

export default LocaleGreet;
