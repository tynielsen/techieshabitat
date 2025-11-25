import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies light theme styles', () => {
    const { container } = render(<Card theme="light">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-white');
  });

  it('applies dark theme styles', () => {
    const { container } = render(<Card theme="dark">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-gray-800');
  });
});
