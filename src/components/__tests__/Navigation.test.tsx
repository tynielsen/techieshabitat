import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navigation } from '../Navigation';

describe('Navigation', () => {
  const mockOnPageChange = vi.fn();
  const mockOnThemeToggle = vi.fn();

  const defaultProps = {
    activePage: 'home' as const,
    onPageChange: mockOnPageChange,
    theme: 'light' as const,
    onThemeToggle: mockOnThemeToggle,
  };

  it('renders all navigation items', () => {
    render(<Navigation {...defaultProps} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Desk Setup')).toBeInTheDocument();
    expect(screen.getByText('Health & Wellness')).toBeInTheDocument();
  });

  it('calls onPageChange when clicked', () => {
    render(<Navigation {...defaultProps} />);
    
    const deskButton = screen.getAllByText('Desk Setup')[0];
    fireEvent.click(deskButton);
    
    expect(mockOnPageChange).toHaveBeenCalledWith('desk');
  });

  it('calls onThemeToggle when theme button clicked', () => {
    render(<Navigation {...defaultProps} />);
    
    const themeButtons = screen.getAllByLabelText('Toggle theme');
    fireEvent.click(themeButtons[0]);
    
    expect(mockOnThemeToggle).toHaveBeenCalled();
  });
});
