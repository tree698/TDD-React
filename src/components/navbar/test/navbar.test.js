// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../navbar';

describe('Navbar', () => {
  it('renders', () => {
    const component = renderer.create(<Navbar totalCount={3} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  //   it('display total count when props are transferred', () => {
  //     render(<Navbar totalCount={jest.fn(() => 3)} />);
  //     const displayedCount = document.querySelector('.navbar-count');
  //     expect(displayedCount.textContent).toBe(3);
  //   });
});
