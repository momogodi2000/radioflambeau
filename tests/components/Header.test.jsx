
// tests/components/Header.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Header from '../src/components/Header/Header';

const HeaderWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('Header', () => {
  const mockProps = {
    mobileMenuOpen: false,
    setMobileMenuOpen: vi.fn(),
    onPlayClick: vi.fn(),
    isPlaying: false
  };
  
  it('should render header with logo and navigation', () => {
    render(
      <HeaderWrapper>
        <Header {...mockProps} />
      </HeaderWrapper>
    );
    
    expect(screen.getByText('Radio Flambeau-Banka')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
  });
  
  it('should toggle mobile menu when menu button is clicked', () => {
    render(
      <HeaderWrapper>
        <Header {...mockProps} />
      </HeaderWrapper>
    );
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    
    fireEvent.click(menuButton);
    
    expect(mockProps.setMobileMenuOpen).toHaveBeenCalledWith(true);
  });
});