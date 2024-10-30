import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Converter from '../components/Converter';

test('renders converter component', () => {
  render(<Converter />);
  const headerElement = screen.getByText(/Conversor de Moeda/i);
  expect(headerElement).toBeInTheDocument();
});

test('converts currency correctly', () => {
  render(<Converter />);
  
  fireEvent.change(screen.getByPlaceholderText(/Valor/i), { target: { value: '100' } });
  fireEvent.change(screen.getByDisplayValue(/USD/i), { target: { value: 'BRL' } });
  fireEvent.change(screen.getByDisplayValue(/EUR/i), { target: { value: 'EUR' } });
  fireEvent.click(screen.getByText(/Converter/i));
  
  const resultElement = screen.getByText(/Resultado:/i);
  expect(resultElement).toBeInTheDocument();
});
