import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import routesConfig from '../routes/routesConfig';

beforeEach(() => { // Arrange in context of route component 
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ['/'],
  });
  render(<RouterProvider router={router} />);
});

describe('Nav component', () => {
  it('renders correct heading', () => {
    expect(screen.getByRole('paragraph').textContent).toMatch(/Navigation/);
  });

  it('renders home link', () => {
    expect(screen.getByRole('link', { name: /home/i }).textContent).toMatch(
      /home/i
    );
  });

  it('renders shop link', () => {
    expect(screen.getByRole('link', { name: /shop/i }).textContent).toMatch(
      /shop/i
    );
  });

  it('clicking home navigates to home', async () => {
    await userEvent.click(screen.getByRole('link', { name: /home/i })); // Act

    expect(screen.getByRole('heading').textContent).toMatch(/Home/); // Assert
  });

  it('clicking shop navigates to shop', async () => {
    await userEvent.click(screen.getByRole('link', { name: /shop/i })); // Act

    expect(screen.getByRole('heading').textContent).toMatch(/Shop/); // Assert
  });
});
