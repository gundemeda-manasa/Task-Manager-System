mport React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App Component', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // You can add more specific assertions if needed
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  // Add more test cases as needed for different routes and functionality
});