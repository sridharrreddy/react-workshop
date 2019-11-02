import React from 'react'
import './App.css'

function greet(language, name) {
  switch (language) {
    case 'es':
      return 'Hola ' + name + '!'
    case 'gb':
      return 'Halo ' + name
    case 'en':
    default:
      return 'Hello ' + name
  }
}

function App({ lang, name }) {
  return <div className="App">{greet(lang, name)}</div>
}

export default App
