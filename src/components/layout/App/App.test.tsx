import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'components/layout/App/App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/rob kennedy/i);
    expect(linkElement).toBeInTheDocument();
});
