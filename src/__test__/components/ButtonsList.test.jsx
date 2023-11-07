import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonsList from '../../components/ButtonsList';

const sampleData = [
  { id: 1, title: 'Button 1', details: 'Details 1' },
  { id: 2, title: 'Button 2', details: 'Details 2' },
];

describe('ButtonsList', () => {
  it('should render all buttons from provided data', () => {
    render(<ButtonsList data={sampleData} />);

    sampleData.forEach((item) => {
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
    });
  });

  it('should call provided onClick handler when any button is clicked', () => {
    const onClickMock = jest.fn();
    render(<ButtonsList data={sampleData} onClick={onClickMock} />);

    const button = screen.getByRole('button', { name: sampleData[0].title });
    fireEvent.mouseDown(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
