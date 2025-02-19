import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Nav from '../components/nav';

describe("Nav component", () => {
  render(<Nav />);

  it('renders correct heading', () => {
    expect(screen.getByRole('heading').textContent).toMatch(/Navigation/);
  })

  it('renders home link', () => {
    expect(screen.getByRole('link', {name: /home/i}).textContent).toMatch(/home/i);
  })

  it('renders shop link', () => {
    expect(screen.getByRole('link', {name: /shop/i}).textContent).toMatch(/shop/i);
  })
})