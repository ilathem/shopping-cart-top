
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import routesConfig from '../routes/routesConfig';
import Home from '../routes/home';

beforeEach(() => { // Arrange in context of route component 
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ['/'],
  });
  render(<RouterProvider router={router} />);
});

describe('Home component', () => {
  it('renders correct heading', () => {
    expect(screen.getByRole('heading', { name: 'page-title' }).textContent).toMatch(/Home/); // Assert
  })
  
  it('displays greeting component', () => {
    expect(screen.getByText(/Welcome/));
  })

  it('displays author', () => {
    expect(screen.getByText(/Isaiah Lathem/));
  })

  it('has a link to the repo', () => {
    expect(screen.getByRole('link', {name: /repo/i})).toHaveAttribute('href', 'https://github.com/ilathem/shopping-cart-top');
  } )
  
  it('renders snapshot correctly', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot();
  })
})