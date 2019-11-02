import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Add from './Add';

it('should render result of 0 when operands are not changed', () => {
  const { getByText } = render(<Add onOpCountChange={() => jest.fn()} />);

  expect(getByText('Result: 0')).toBeTruthy();
});

it('should render result of 3 when value of operand 1 is set to 3', () => {
  const { getByPlaceholderText, getByText } = render(
    <Add onOpCountChange={() => jest.fn()} />
  );
  const op1 = getByPlaceholderText('operand 1');
  const event = { target: { value: '3' } };
  fireEvent.change(op1, event);

  expect(getByText('Result: 3')).toBeTruthy();
});

it('should render result of 10 when value of operand 1 is set to 3 and operand 2 is set to 7', () => {
  const { getByPlaceholderText, getByText } = render(
    <Add onOpCountChange={() => jest.fn()} />
  );
  const op1 = getByPlaceholderText('operand 1');
  const op2 = getByPlaceholderText('operand 2');
  const event1 = { target: { value: '3' } };
  const event2 = { target: { value: '7' } };
  fireEvent.change(op1, event1);
  fireEvent.change(op2, event2);

  expect(getByText('Result: 10')).toBeTruthy();
});
