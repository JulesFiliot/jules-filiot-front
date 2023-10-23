import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ExtendedButton from '../../../components/UI/ExtendedButton';

describe('ExtendedButton', () => {
  it('should toggles text visibility on button click', async () => {
    render(<ExtendedButton label="Toggle" text="Hello World" />);

    const textContainer = screen.getByTestId('textContainerTest');
    expect(textContainer.classList.contains('displayed')).toBe(false);

    const button = screen.getByRole('button', { name: 'Toggle' });
    fireEvent.mouseDown(button);
    expect(textContainer.classList.contains('displayed')).toBe(true);
  });

  it('should calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<ExtendedButton label="Toggle" text="Hello World" onClick={onClickMock} />);

    const button = screen.getByRole('button', { name: 'Toggle' });
    fireEvent.mouseDown(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should initially show text if extended prop is true', () => {
    render(<ExtendedButton label="Toggle" text="Hello World" extended />);
    const textContainer = screen.getByTestId('textContainerTest');
    expect(textContainer.classList.contains('displayed')).toBe(true);

    const button = screen.getByRole('button', { name: 'Toggle' });
    fireEvent.mouseDown(button);
    expect(textContainer.classList.contains('displayed')).toBe(false);
  });
});
