import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Nav from '../components/nav';

describe('Nav component', () => {
  it('renders correct heading', () => {
    render(<Nav />);
    expect(screen.getByRole('heading').textContent).toMatch(/Navigation/);
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
});
