import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'components/layout/App/App';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/rob kennedy/i);
    expect(linkElement).toBeInTheDocument();
});
