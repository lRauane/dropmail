import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 

import { AdressInput } from '../src/components/AdressInput';

test('renders email input component', () => {
  render(<AdressInput />);
  const emailInput = screen.getByRole('textbox');
  expect(emailInput).toBeInTheDocument();
});

test('renders copy button', () => {
  render(<AdressInput />);
  const copyButton = screen.getByText(/Copiar/i);
  expect(copyButton).toBeInTheDocument();
});

test('renders update button', () => {
  render(<AdressInput />);
  const updateButton = screen.getByText(/Atualizar/i);
  expect(updateButton).toBeInTheDocument();
});
