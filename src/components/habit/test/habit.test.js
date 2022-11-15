import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import Habit from '../habit';

describe('Habit Component', () => {
  const habit = { name: 'Reading', count: 1 };
  let onIncrement;
  let onDecrement;
  let onDelete;
  let habitComponent;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    habitComponent = (
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });

  it('renders', () => {
    const component = renderer.create(
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('button click', () => {
    beforeEach(() => {
      render(habitComponent);
    });

    it('calls onIncrement when clicking "increase" button', () => {
      const increaseBtn = screen.getByTitle('increase');
      userEvent.click(increaseBtn);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDecrement when clicking "decrease" button', () => {
      const decreaseBtn = screen.getByTitle('decrease');
      userEvent.click(decreaseBtn);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDelete when clicking "delete" button', () => {
      const deleteBtn = screen.getByTitle('delete');
      userEvent.click(deleteBtn);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
