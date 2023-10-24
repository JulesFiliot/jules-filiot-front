import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../../components/UI/Button';

describe('Button', () => {
  it('should render with provided label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('should call onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click Me" onClick={onClickMock} />);
    fireEvent.mouseDown(screen.getByRole('button', { name: 'Click Me' }));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply the uppercase class when uppercase prop is true', () => {
    render(<Button label="Click Me" uppercase />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button.classList.contains('uppercase')).toBe(true);
  });

  it('should apply the lowercase class when lowercase prop is true', () => {
    render(<Button label="Click Me" lowercase />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button.classList.contains('lowercase')).toBe(true);
  });

  it('should apply the capitalize class when capitalize prop is true', () => {
    render(<Button label="Click Me" capitalize />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button.classList.contains('capitalize')).toBe(true);
  });

  it('should apply the negative class when negative prop is true', () => {
    render(<Button label="Click Me" negative />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button.classList.contains('negative')).toBe(true);
  });

  it('should call onBlur handler when button loses focus', () => {
    const onBlurMock = jest.fn();
    render(<Button label="Click Me" onBlur={onBlurMock} />);
    const button = screen.getByRole('button', { name: 'Click Me' });

    fireEvent.focus(button);
    fireEvent.blur(button);

    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});
