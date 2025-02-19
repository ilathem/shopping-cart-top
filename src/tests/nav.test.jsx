import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import Nav from '../components/nav';
import routesConfig from '../routes/routesConfig';

describe('Nav component', () => {
  it('renders correct heading', () => {
    render(<Nav />);
    expect(screen.getByRole('paragraph').textContent).toMatch(/Navigation/);
  });

  it('renders home link', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: /home/i }).textContent).toMatch(
      /home/i
    );
  });

  it('renders shop link', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: /shop/i }).textContent).toMatch(
      /shop/i
    );
  });

  it('clicking home navigates to home', async () => {
    const router = createMemoryRouter(routesConfig, { // Arrange
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    await userEvent.click(screen.getByRole('link', { name: /home/i })); // Act

    expect(screen.getByRole('heading').textContent).toMatch(/Home/); // Assert
  });

  it('clicking shop navigates to shop', async () => {
    const router = createMemoryRouter(routesConfig, { // Arrange
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    await userEvent.click(screen.getByRole('link', { name: /shop/i })); // Act

    expect(screen.getByRole('heading').textContent).toMatch(/Shop/); // Assert
  });
});
