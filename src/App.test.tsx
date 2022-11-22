import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('should render App', () => {
    render(<App />);

    const aplication = screen.getByTestId(/app/i);

    expect(aplication).toBeInTheDocument();
  });
})
