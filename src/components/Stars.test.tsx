import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Stars from './Stars';


test('rendering text', async () => {
    const rating = 2
    render(<Stars rating={rating} />);
    const linkElement = await screen.findByText(rating)
    expect(linkElement).toContainHTML(rating.toString())
});
