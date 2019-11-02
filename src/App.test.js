import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name="foo" lang="bar" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render spanish greeting', () => {
  const { getByText } = render(<App name="Reddy" lang="es" />);
  expect(getByText('Hola Reddy', { exact: false })).toBeTruthy();
});

it('should render op count as 0 when no ops were performed', () => {
  const { getByText } = render(<App name="foo" lang="bar" />);

  expect(getByText('Op Count: 0')).toBeTruthy();
});

it('should render op count as 1 when operand 1 is changed', () => {
  const { getByPlaceholderText, getByText } = render(
    <App name="foo" lang="bar" />
  );
  const op1 = getByPlaceholderText('operand 1');
  const event1 = { target: { value: '3' } };
  fireEvent.change(op1, event1);

  expect(getByText('Op Count: 1')).toBeTruthy();
});

it('should render op count as 2 when operand 1 and 2 are changed once each', () => {
  const { getByPlaceholderText, getByText } = render(
    <App name="foo" lang="bar" />
  );
  const op1 = getByPlaceholderText('operand 1');
  const op2 = getByPlaceholderText('operand 2');
  const event1 = { target: { value: '3' } };
  const event2 = { target: { value: '7' } };
  fireEvent.change(op1, event1);
  fireEvent.change(op2, event2);

  expect(getByText('Op Count: 2')).toBeTruthy();
});
