import React from 'react';
import { render } from '@testing-library/react';
import LocaleGreet from './LocaleGreet';

it('render spanish greeting', () => {
  const { getByText } = render(<LocaleGreet name="Reddy" lang="es" />);
  expect(getByText('Hola Reddy', { exact: false })).toBeTruthy();
});

it('render english greeting', () => {
  const { getByText } = render(<LocaleGreet name="Reddy" lang="en" />);
  expect(getByText('Hello Reddy', { exact: false })).toBeTruthy();
});

it('render german greeting', () => {
  const { getByText } = render(<LocaleGreet name="Reddy" lang="gb" />);
  expect(getByText('Halo Reddy', { exact: false })).toBeTruthy();
});
