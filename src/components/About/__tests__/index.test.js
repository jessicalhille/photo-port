import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// after each test, leftover memory is cleaned up so that no false results occur
afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})