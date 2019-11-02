import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render spanish greeting', () => {
  const { getByText } = render(<App name="Reddy" lang="es" />);
  expect(getByText('Hola Reddy', { exact: false })).toBeTruthy();
});
