
// tests/components/AudioPlayer.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AudioPlayer from '../src/components/AudioPlayer/AudioPlayer';

describe('AudioPlayer', () => {
  it('should render audio player correctly', () => {
    render(<AudioPlayer />);
    
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    expect(screen.getByText(/Radio Flambeau-Banka/i)).toBeInTheDocument();
  });
  
  it('should toggle play/pause when button is clicked', async () => {
    render(<AudioPlayer />);
    
    const playButton = screen.getByRole('button', { name: /play/i });
    
    fireEvent.click(playButton);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
    });
  });
  
  it('should update volume when slider is moved', () => {
    render(<AudioPlayer />);
    
    const volumeSlider = screen.getByRole('slider');
    
    fireEvent.change(volumeSlider, { target: { value: '75' } });
    
    expect(volumeSlider.value).toBe('75');
  });
});
